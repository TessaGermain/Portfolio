import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { ProjectsService } from '../../../core/services/projects.service';
import { SectionTitleComponent } from '../../../shared/components/section-title.component';

@Component({
  selector: 'app-skills-cloud-section',
  standalone: true,
  imports: [AsyncPipe, SectionTitleComponent],
  template: `
    <section class="container-page py-16">
      <app-section-title label="Compétences" />

      <div class="skill-board" aria-label="Nuage de compétences utilisées dans les projets">
        <div class="skill-cloud">
          @for (skill of skills$ | async; track skill.label) {
            <span
              class="skill-word"
              [class.skill-word--major]="skill.count > 2"
              [style.font-size.rem]="skill.size"
              [style.--skill-offset]="skill.offset"
              [style.--skill-tilt]="skill.tilt"
              [title]="skill.count + ' projet' + (skill.count > 1 ? 's' : '')"
            >
              {{ skill.label }}
            </span>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .skill-board {
      background:
        radial-gradient(circle at 22% 24%, rgba(105, 48, 195, 0.18), transparent 28%),
        radial-gradient(circle at 78% 70%, rgba(149, 195, 198, 0.16), transparent 32%),
        rgba(9, 5, 15, 0.9);
      border: 1px solid rgba(248, 251, 255, 0.12);
      border-radius: 0.75rem;
      box-shadow: 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.34);
      margin-inline: auto;
      max-width: 64rem;
      overflow: hidden;
      padding: clamp(1.5rem, 4vw, 2.8rem);
      position: relative;
    }

    .skill-board::before {
      background-image:
        radial-gradient(circle, rgba(248, 251, 255, 0.5) 0 1px, transparent 1px),
        radial-gradient(circle, rgba(149, 195, 198, 0.35) 0 1px, transparent 1px);
      background-position: 0 0, 1rem 1.2rem;
      background-size: 3.2rem 3.2rem, 4.6rem 4.6rem;
      content: '';
      inset: 0;
      opacity: 0.16;
      pointer-events: none;
      position: absolute;
    }

    .skill-cloud {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: clamp(0.9rem, 2.4vw, 1.8rem) clamp(1.15rem, 3.8vw, 3rem);
      justify-content: space-around;
      min-height: 15rem;
      position: relative;
      z-index: 1;
    }

    .skill-word {
      --skill-offset: 0;
      --skill-tilt: 0;
      color: rgba(248, 251, 255, 0.84);
      display: inline-block;
      font-family: Biko, Inter, sans-serif;
      font-weight: 600;
      line-height: 0.95;
      padding: 0.08em 0.12em;
      text-shadow: 0 0.08em 0 #09050f, 0 0 1.1rem rgba(149, 195, 198, 0.08);
      transform: translateY(calc(var(--skill-offset) * 0.45rem)) rotate(calc(var(--skill-tilt) * 1deg));
      white-space: nowrap;
    }

    .skill-word--major {
      color: #f8fbff;
      text-shadow: 0 0.08em 0 #09050f, 0 0 1.4rem rgba(149, 195, 198, 0.18);
    }

    @media (max-width: 640px) {
      .skill-cloud {
        justify-content: center;
        min-height: 0;
      }
    }

    @media (min-width: 768px) {
      .skill-cloud {
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        grid-template-rows: repeat(5, minmax(2.7rem, auto));
        justify-content: initial;
        min-height: 18rem;
      }

      .skill-word {
        justify-self: center;
      }

      .skill-word:nth-child(1) {
        grid-column: 1 / span 4;
        grid-row: 1;
      }

      .skill-word:nth-child(2) {
        grid-column: 8 / span 4;
        grid-row: 1;
        justify-self: start;
      }

      .skill-word:nth-child(3) {
        grid-column: 5 / span 3;
        grid-row: 2;
      }

      .skill-word:nth-child(4) {
        grid-column: 1 / span 3;
        grid-row: 3;
        justify-self: start;
      }

      .skill-word:nth-child(5) {
        grid-column: 9 / span 4;
        grid-row: 3;
        justify-self: end;
      }

      .skill-word:nth-child(6) {
        grid-column: 4 / span 4;
        grid-row: 4;
      }

      .skill-word:nth-child(7) {
        grid-column: 7 / span 3;
        grid-row: 5;
      }

      .skill-word:nth-child(8) {
        grid-column: 10 / span 3;
        grid-row: 2;
      }

      .skill-word:nth-child(9) {
        grid-column: 2 / span 3;
        grid-row: 5;
      }

      .skill-word:nth-child(10) {
        grid-column: 6 / span 3;
        grid-row: 1;
      }

      .skill-word:nth-child(n + 11) {
        justify-self: center;
      }

      .skill-word:nth-child(11) {
        grid-column: 3 / span 3;
        grid-row: 2;
      }

      .skill-word:nth-child(12) {
        grid-column: 8 / span 3;
        grid-row: 4;
      }

      .skill-word:nth-child(13) {
        grid-column: 11 / span 2;
        grid-row: 5;
      }
    }
  `
})
export class SkillsCloudSectionComponent {
  private readonly projectsService = inject(ProjectsService);

  readonly skills$ = this.projectsService.getSkillCloud().pipe(
    map((skills) =>
      skills.map((skill, index) => ({
        ...skill,
        offset: (index % 3) - 1,
        tilt: (index % 5) - 2,
        size: Number((1.05 + skill.weight * 1.35).toFixed(2))
      }))
    )
  );
}
