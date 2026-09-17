import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ProjectCategory } from '../../core/models/project.model';
import { ProjectsService } from '../../core/services/projects.service';
import { SectionTitleComponent } from '../../shared/components/section-title.component';
import { ProjectCardComponent } from './components/project-card.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [AsyncPipe, RouterLink, ProjectCardComponent, SectionTitleComponent],
  template: `
    <main class="projects-page relative isolate overflow-hidden py-10 sm:py-12">
      <img src="/assets/images/cloud_3.svg" alt="" aria-hidden="true" class="projects-cloud projects-cloud--top" />
      <img src="/assets/images/cloud_6.svg" alt="" aria-hidden="true" class="projects-cloud projects-cloud--middle" />
      <img src="/assets/images/cloud_1.svg" alt="" aria-hidden="true" class="projects-cloud projects-cloud--bottom" />

      <div class="container-page relative z-10">
      <div class="mb-6">
        <div>
          <a routerLink="/" class="focus-ring text-sm font-bold text-lightBlue hover:text-white">Retour à l'accueil</a>
          <h1 class="mt-3 font-title text-5xl text-white">{{ pageTitle$ | async }}</h1>
        </div>
      </div>

      <app-section-title label="Tous les projets" />
      <div class="grid items-stretch gap-5 xl:grid-cols-2">
        @for (project of projects$ | async; track project.id) {
          <app-project-card [project]="project" />
        } @empty {
          <p class="rounded-lg border border-white/10 bg-white/[0.04] p-8 text-white/70 xl:col-span-2">Aucun projet à afficher.</p>
        }
      </div>
      </div>
    </main>
  `,
  styles: `
    .projects-cloud {
      filter: invert(75%) sepia(17%) saturate(422%) hue-rotate(137deg) brightness(88%) contrast(87%);
      opacity: 0.12;
      pointer-events: none;
      position: absolute;
      user-select: none;
      z-index: -1;
    }

    .projects-cloud--top {
      right: -9rem;
      top: 1rem;
      width: clamp(22rem, 38vw, 42rem);
    }

    .projects-cloud--middle {
      left: -13rem;
      top: 34rem;
      width: clamp(24rem, 46vw, 54rem);
    }

    .projects-cloud--bottom {
      bottom: -8rem;
      opacity: 0.1;
      right: 10%;
      width: clamp(20rem, 34vw, 44rem);
    }
  `
})
export class ProjectsPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly projectsService = inject(ProjectsService);

  readonly category$ = this.route.paramMap.pipe(
    map((params) => (params.get('category') === 'design' ? 'design' : 'development') as ProjectCategory)
  );
  readonly pageTitle$ = this.category$.pipe(
    map((category) => (category === 'design' ? 'Webdesign / Graphisme' : 'Développement web'))
  );
  readonly projects$ = this.category$.pipe(
    switchMap((category) => this.projectsService.getProjectsByCategory(category))
  );
}
