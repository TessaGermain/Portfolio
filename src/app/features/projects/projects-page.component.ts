import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { combineLatest, map, switchMap } from 'rxjs';
import { ProjectCategory } from '../../core/models/project.model';
import { ProjectsService } from '../../core/services/projects.service';
import { SectionTitleComponent } from '../../shared/components/section-title.component';
import { ProjectCardComponent } from './components/project-card.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [AsyncPipe, RouterLink, ProjectCardComponent, SectionTitleComponent, NgClass],
  template: `
    <main class="container-page py-16">
      <div class="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <a routerLink="/" class="focus-ring text-sm font-bold text-lightBlue hover:text-white">Retour a l'accueil</a>
          <h1 class="mt-4 text-5xl text-white">{{ pageTitle$ | async }}</h1>
        </div>
        <div class="flex flex-wrap gap-2">
          @for (filter of filters$ | async; track filter) {
            <button type="button" (click)="toggleFilter(filter)" class="focus-ring rounded-full border px-4 py-2 text-sm font-bold transition" [ngClass]="activeFilters().includes(filter) ? 'border-lightBlue bg-lightBlue text-ink' : 'border-white/20 text-white hover:border-lightBlue/60'">
              {{ filter }}
            </button>
          }
        </div>
      </div>

      <app-section-title label="Tous les projets" />
      <div class="grid gap-8">
        @for (project of filteredProjects$ | async; track project.id) {
          <app-project-card [project]="project" />
        } @empty {
          <p class="rounded-lg border border-white/10 bg-white/[0.04] p-8 text-white/70">Aucun projet ne correspond a ces filtres.</p>
        }
      </div>
    </main>
  `
})
export class ProjectsPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly projectsService = inject(ProjectsService);

  readonly activeFilters = signal<string[]>([]);
  readonly category$ = this.route.paramMap.pipe(
    map((params) => (params.get('category') === 'design' ? 'design' : 'development') as ProjectCategory)
  );
  readonly pageTitle$ = this.category$.pipe(
    map((category) => (category === 'design' ? 'Webdesign / Graphisme' : 'Developpement web'))
  );
  readonly filters$ = this.category$.pipe(
    switchMap((category) => this.projectsService.getFilters(category))
  );
  readonly projects$ = this.category$.pipe(
    switchMap((category) => this.projectsService.getProjectsByCategory(category))
  );
  readonly filteredProjects$ = combineLatest([this.projects$, toObservable(this.activeFilters)]).pipe(
    map(([projects, filters]) => {
      if (!filters.length) {
        return projects;
      }

      return projects.filter((project) => project.tools.some((tool) => filters.includes(tool)));
    })
  );

  toggleFilter(filter: string): void {
    this.activeFilters.update((filters) =>
      filters.includes(filter) ? filters.filter((item) => item !== filter) : [...filters, filter]
    );
  }
}
