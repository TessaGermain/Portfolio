import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../../core/services/projects.service';
import { ProjectCardComponent } from '../projects/components/project-card.component';
import { SectionTitleComponent } from '../../shared/components/section-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, RouterLink, ProjectCardComponent, SectionTitleComponent],
  template: `
    <main>
      <section class="relative isolate overflow-hidden bg-gradient-to-br from-indigo via-indigo-bloom to-steelBlue">
        <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(149,195,198,0.42),transparent_34%),linear-gradient(135deg,rgba(65,0,102,0.95),rgba(35,130,190,0.82))]"></div>
        <div class="container-page grid min-h-[calc(100vh-4rem)] content-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div class="max-w-3xl">
            <p class="mb-5 font-bold uppercase tracking-[0.32em] text-lightBlue">Portfolio creatif et developpement web</p>
            <h1 class="text-5xl leading-tight text-white sm:text-7xl">Tessa Germain</h1>
            <p class="mt-7 max-w-2xl text-xl leading-9 text-white/82">
              Developpeuse orientee front-end et full-stack, avec un gout fort pour les interfaces soignees, les projets interactifs et les univers visuels construits avec intention.
            </p>
            <div class="mt-9 flex flex-wrap gap-4">
              <a routerLink="/projets/development" class="focus-ring rounded bg-white px-5 py-3 font-bold text-indigo transition hover:bg-lightBlue">Voir le developpement</a>
              <a routerLink="/projets/design" class="focus-ring rounded border border-white/40 px-5 py-3 font-bold text-white transition hover:border-white hover:bg-white/10">Voir le design</a>
            </div>
          </div>
          <div class="grid content-center gap-4 sm:grid-cols-2">
            @for (color of palette; track color.hex) {
              <div class="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur">
                <div class="mb-5 h-24 rounded" [style.background]="color.hex"></div>
                <p class="font-title text-2xl text-white">{{ color.hex }}</p>
                <p class="mt-1 text-sm font-bold text-white/65">{{ color.name }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <section class="container-page py-20">
        <app-section-title label="A propos" />
        <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div class="rounded-lg border border-white/10 bg-white/[0.04] p-8">
            <p class="text-lg leading-8 text-white/75">
              Je reconstruis ce portfolio comme une base evolutive : composants reutilisables, donnees centralisees et palette coherente dans Tailwind.
            </p>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            @for (skill of skills; track skill) {
              <span class="rounded border border-lightBlue/25 bg-lightBlue/10 px-4 py-3 font-bold text-lightBlue">{{ skill }}</span>
            }
          </div>
        </div>
      </section>

      <section class="container-page pb-24">
        <app-section-title label="Projets selectionnes" />
        <div class="grid gap-8">
          @for (project of featuredProjects$ | async; track project.id) {
            <app-project-card [project]="project" />
          }
        </div>
      </section>
    </main>
  `
})
export class HomeComponent {
  private readonly projectsService = inject(ProjectsService);
  featuredProjects$ = this.projectsService.getFeaturedProjects();

  palette = [
    { hex: '#410066', name: 'Indigo' },
    { hex: '#6930C3', name: 'Indigo Bloom' },
    { hex: '#5E60CE', name: 'Slate Blue' },
    { hex: '#2382BE', name: 'Steel Blue' },
    { hex: '#95C3C6', name: 'Light Blue' }
  ];

  skills = ['Angular', 'Tailwind', 'PHP', 'SQL', 'JavaScript', 'Figma', 'Photoshop', 'Illustrator'];
}
