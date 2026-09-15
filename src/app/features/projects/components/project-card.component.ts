import { Component, input, signal } from '@angular/core';
import { Project } from '../../../core/models/project.model';
import { ModalComponent } from '../../../shared/components/modal.component';
import { PortfolioButtonComponent } from '../../../shared/components/portfolio-button.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ModalComponent, PortfolioButtonComponent],
  template: `
    <article class="project-card group">
      <div class="project-card__media">
        @if (project().image) {
          <img [src]="project().image" [alt]="project().title" class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
        }
      </div>

      <div class="project-card__body">
        <header class="project-card__header">
          <p class="font-accent text-xs font-bold uppercase tracking-[0.22em] text-lightBlue">{{ project().context }}</p>
          <h3 class="mt-2 font-accent text-3xl font-bold text-white">{{ project().title }}</h3>

          <div class="project-card__meta">
            <span>
              <small>Période</small>
              {{ project().date }}
            </span>
            <span>
              <small>Temps</small>
              {{ project().duration }}
            </span>
          </div>
        </header>

        <div class="project-card__content">
          <div class="project-card__tools" aria-label="Technologies utilisées">
            @for (tool of project().tools; track tool) {
              <span>{{ tool }}</span>
            }
          </div>

          <p class="text-base leading-7 text-white/76">{{ project().summary }}</p>

          <div class="project-card__actions">
            @if (project().links?.length) {
              @for (link of project().links; track link.url) {
                <app-portfolio-button class="project-action-button" [label]="link.label" [href]="link.url" shape="rectangle" variant="dark" icon="arrow-right" />
              }
            }

            <app-portfolio-button class="project-action-button" label="En savoir +" shape="rectangle" variant="secondary" icon="arrow-right" (clicked)="showDetails()" />
          </div>
        </div>
      </div>
    </article>

    <app-modal [open]="detailsOpen()" [title]="project().title" (closed)="closeDetails()">
      <div class="project-modal">
        <div class="project-modal__meta">
          <span>{{ project().context }}</span>
          <span class="is-primary">{{ project().date }}</span>
          <span>{{ project().duration }}</span>
        </div>

        <p class="project-modal__description">{{ project().description }}</p>

        <div>
          <h3 class="project-modal__title">Tâches réalisées</h3>
          <ul class="project-modal__tasks">
            @for (task of project().tasks; track task) {
              <li>{{ task }}</li>
            }
          </ul>
        </div>
      </div>
    </app-modal>
  `,
  styles: `
    .project-card {
      background:
        linear-gradient(180deg, rgba(149, 195, 198, 0.08), rgba(20, 0, 31, 0) 44%),
        #0c0612;
      border: 1px solid rgba(248, 251, 255, 0.12);
      border-radius: 0.75rem;
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
    }

    .project-card__header {
      border-bottom: 1px solid rgba(248, 251, 255, 0.08);
      padding-bottom: 1rem;
    }

    .project-card__meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.55rem;
      margin-top: 0.75rem;
    }

    .project-card__meta span {
      align-items: center;
      background: rgba(9, 5, 15, 0.42);
      border: 1px solid rgba(149, 195, 198, 0.22);
      border-radius: 0.45rem;
      color: #f8fbff;
      display: grid;
      font-family: Biko, Inter, sans-serif;
      font-size: 0.86rem;
      font-weight: 700;
      gap: 0.12rem;
      min-width: 7.1rem;
      padding: 0.42rem 0.58rem;
    }

    .project-card__meta small {
      color: #95c3c6;
      font-family: Inter, sans-serif;
      font-size: 0.58rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .project-card__body {
      flex: 1;
      padding: 1.25rem;
    }

    .project-card__media {
      aspect-ratio: 16 / 8;
      background: rgba(65, 0, 102, 0.38);
      border-bottom: 1px solid rgba(248, 251, 255, 0.1);
      overflow: hidden;
      width: 100%;
    }

    .project-card__content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      height: calc(100% - 6.7rem);
      padding-top: 1rem;
    }

    .project-card__tools {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .project-card__tools span {
      background: rgba(94, 96, 206, 0.16);
      border: 1px solid rgba(149, 195, 198, 0.24);
      border-radius: 999px;
      color: #95c3c6;
      font-size: 0.8rem;
      font-weight: 700;
      padding: 0.35rem 0.65rem;
    }

    .project-card__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.7rem;
      padding-top: 0.1rem;
    }

    .project-modal {
      display: grid;
      gap: 1.7rem;
    }

    .project-modal__meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
    }

    .project-modal__meta span {
      border: 1px solid rgba(149, 195, 198, 0.22);
      border-radius: 999px;
      color: rgba(248, 251, 255, 0.66);
      font-size: 0.76rem;
      font-weight: 700;
      line-height: 1;
      padding: 0.36rem 0.58rem;
    }

    .project-modal__meta .is-primary {
      background: rgba(149, 195, 198, 0.12);
      border-color: rgba(149, 195, 198, 0.42);
      color: #f8fbff;
    }

    .project-modal__description {
      color: rgba(248, 251, 255, 0.74);
      font-size: 1rem;
      line-height: 1.75;
      margin: 0;
    }

    .project-modal__title {
      border-left: 3px solid #95c3c6;
      color: #f8fbff;
      font-family: Biko, Inter, sans-serif;
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      padding-left: 0.8rem;
    }

    .project-modal__tasks {
      display: grid;
      gap: 0.8rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .project-modal__tasks li {
      align-items: start;
      color: rgba(248, 251, 255, 0.78);
      display: grid;
      font-size: 0.98rem;
      gap: 0.7rem;
      grid-template-columns: auto minmax(0, 1fr);
      line-height: 1.55;
    }

    .project-modal__tasks li::before {
      background: #95c3c6;
      border-radius: 999px;
      box-shadow: 0 0 0 0.3rem rgba(149, 195, 198, 0.1);
      content: '';
      height: 0.45rem;
      margin-top: 0.58rem;
      width: 0.45rem;
    }

    @media (min-width: 768px) {
      .project-modal__description {
        font-size: 1.04rem;
      }
    }

    @media (min-width: 1280px) {
      .project-card__body {
        padding: 1.45rem;
      }

      .project-card__media {
        max-height: 12rem;
      }
    }
  `
})
export class ProjectCardComponent {
  project = input.required<Project>();
  protected readonly detailsOpen = signal(false);

  protected showDetails(): void {
    this.detailsOpen.set(true);
  }

  protected closeDetails(): void {
    this.detailsOpen.set(false);
  }
}
