import { Component, input } from '@angular/core';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-card-comparison',
  standalone: true,
  template: `
    <section class="mb-16">
      <div class="mb-7">
        <p class="font-accent text-sm font-bold uppercase tracking-[0.24em] text-lightBlue">Atelier cartes</p>
        <h2 class="mt-2 font-title text-4xl text-white">Comparaison des directions</h2>
      </div>

      <div class="grid gap-7">
        <article class="direction-card">
          <p class="direction-label">01 - Editoriale</p>
          <div class="editorial-card group">
            <div class="relative min-h-72 overflow-hidden rounded bg-indigo/40">
              @if (project().image) {
                <img [src]="project().image" [alt]="project().title" class="h-full min-h-72 w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
              }
              <span class="absolute left-4 top-4 rounded bg-night/80 px-3 py-1 font-accent text-xs font-bold uppercase tracking-[0.16em] text-lightBlue">Projet 01</span>
            </div>
            <div class="flex flex-col justify-center p-6 sm:p-8">
              <p class="font-accent text-sm font-bold uppercase tracking-[0.2em] text-lightBlue">{{ project().context }}</p>
              <h3 class="mt-3 font-accent text-4xl font-bold text-white">{{ project().title }}</h3>
              <p class="mt-4 max-w-xl text-base leading-7 text-white/72">{{ project().summary }}</p>
              <div class="mt-6 flex flex-wrap gap-2">
                @for (tool of project().tools; track tool) {
                  <span class="rounded-full border border-lightBlue/30 px-3 py-1 text-xs font-bold text-lightBlue">{{ tool }}</span>
                }
              </div>
              <div class="mt-7 flex flex-wrap items-center gap-4">
                <a class="project-link" href="#">Voir le projet</a>
                <span class="text-sm text-white/50">{{ project().date }}</span>
              </div>
            </div>
          </div>
        </article>

        <article class="direction-card">
          <p class="direction-label">02 - Dossier technique</p>
          <div class="technical-card">
            <div class="flex flex-wrap items-start justify-between gap-5 border-b border-white/10 pb-5">
              <div>
                <p class="font-accent text-xs font-bold uppercase tracking-[0.22em] text-lightBlue">{{ project().category }}</p>
                <h3 class="mt-2 font-accent text-3xl font-bold text-white">{{ project().title }}</h3>
              </div>
              <div class="grid gap-1 text-right text-sm text-white/62">
                <span>{{ project().date }}</span>
                <span>{{ project().duration }}</span>
              </div>
            </div>
            <div class="grid gap-6 pt-5 lg:grid-cols-[0.8fr_1.2fr]">
              <div class="overflow-hidden rounded bg-indigo/40">
                @if (project().image) {
                  <img [src]="project().image" [alt]="project().title" class="aspect-[4/3] w-full object-cover" />
                }
              </div>
              <div>
                <p class="text-base leading-7 text-white/74">{{ project().description }}</p>
                <div class="mt-5 grid gap-3 sm:grid-cols-2">
                  @for (task of project().tasks.slice(0, 4); track task) {
                    <span class="border-l-2 border-lightBlue pl-3 text-sm font-semibold text-white/78">{{ task }}</span>
                  }
                </div>
                <div class="mt-6 flex flex-wrap gap-2">
                  @for (tool of project().tools; track tool) {
                    <span class="rounded bg-white/8 px-2.5 py-1 text-xs font-bold text-white/74">{{ tool }}</span>
                  }
                </div>
              </div>
            </div>
          </div>
        </article>

        <article class="direction-card">
          <p class="direction-label">03 - Poster</p>
          <div class="poster-card group">
            @if (project().image) {
              <img [src]="project().image" [alt]="project().title" class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
            }
            <div class="absolute inset-0 bg-gradient-to-r from-night via-night/82 to-night/22"></div>
            <div class="relative z-10 flex min-h-[27rem] max-w-2xl flex-col justify-end p-6 sm:p-8">
              <div class="mb-auto flex flex-wrap gap-2">
                @for (tool of project().tools.slice(0, 4); track tool) {
                  <span class="rounded-full bg-night/70 px-3 py-1 text-xs font-bold text-lightBlue ring-1 ring-lightBlue/30">{{ tool }}</span>
                }
              </div>
              <p class="font-accent text-sm font-bold uppercase tracking-[0.22em] text-lightBlue">{{ project().context }}</p>
              <h3 class="mt-3 font-accent text-5xl font-bold text-white">{{ project().title }}</h3>
              <p class="mt-4 text-base leading-7 text-white/76">{{ project().summary }}</p>
              <a class="project-link mt-7 w-fit" href="#">Voir le projet</a>
            </div>
          </div>
        </article>

        <article class="direction-card">
          <p class="direction-label">04 - Split compact</p>
          <div class="compact-card group">
            <div class="overflow-hidden rounded bg-indigo/40">
              @if (project().image) {
                <img [src]="project().image" [alt]="project().title" class="aspect-[16/10] h-full w-full object-cover transition duration-500 group-hover:scale-[1.04] md:aspect-auto" />
              }
            </div>
            <div class="grid gap-3">
              <div class="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                <span>{{ project().date }}</span>
                <span class="h-1 w-1 rounded-full bg-lightBlue"></span>
                <span>{{ project().duration }}</span>
              </div>
              <h3 class="font-accent text-2xl font-bold text-white">{{ project().title }}</h3>
              <p class="text-sm leading-6 text-white/68">{{ project().summary }}</p>
              <div class="flex flex-wrap gap-2">
                @for (tool of project().tools; track tool) {
                  <span class="text-xs font-bold text-lightBlue">{{ tool }}</span>
                }
              </div>
            </div>
            <a class="project-link self-center" href="#">Voir</a>
          </div>
        </article>
      </div>
    </section>
  `,
  styles: `
    .direction-card {
      border-radius: 0.75rem;
    }

    .direction-label {
      font-family: Biko, Inter, sans-serif;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.16em;
      margin-bottom: 0.85rem;
      text-transform: uppercase;
      color: rgba(149, 195, 198, 0.82);
    }

    .editorial-card,
    .technical-card,
    .poster-card,
    .compact-card {
      border: 1px solid rgba(248, 251, 255, 0.12);
      background: rgba(255, 255, 255, 0.045);
    }

    .editorial-card {
      border-radius: 0.75rem;
      display: grid;
      overflow: hidden;
    }

    .technical-card {
      border-radius: 0.75rem;
      padding: 1.5rem;
    }

    .poster-card {
      border-radius: 0.75rem;
      overflow: hidden;
      position: relative;
    }

    .compact-card {
      align-items: stretch;
      border-radius: 0.75rem;
      display: grid;
      gap: 1rem;
      padding: 0.85rem;
    }

    .project-link {
      border: 1px solid rgba(149, 195, 198, 0.7);
      border-radius: 0.45rem;
      color: #f8fbff;
      display: inline-flex;
      font-family: Biko, Inter, sans-serif;
      font-size: 0.95rem;
      font-weight: 700;
      padding: 0.65rem 0.9rem;
      text-decoration: none;
      transition: background 180ms ease, color 180ms ease;
    }

    .project-link:hover {
      background: #95c3c6;
      color: #14001f;
    }

    @media (min-width: 768px) {
      .editorial-card {
        grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
      }

      .compact-card {
        grid-template-columns: 13rem minmax(0, 1fr) auto;
      }
    }
  `
})
export class ProjectCardComparisonComponent {
  project = input.required<Project>();
}
