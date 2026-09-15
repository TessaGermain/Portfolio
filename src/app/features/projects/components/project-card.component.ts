import { Component, input } from '@angular/core';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  template: `
    <article class="group grid overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-glow md:grid-cols-[0.9fr_1.1fr]">
      <div class="min-h-64 bg-indigo/40">
        @if (project().image) {
          <img [src]="project().image" [alt]="project().title" class="h-full min-h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
        }
      </div>
      <div class="flex flex-col gap-5 p-6 sm:p-8">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-lightBlue">{{ project().context }}</p>
          <h3 class="mt-3 text-3xl text-white">{{ project().title }}</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          @for (tool of project().tools; track tool) {
            <span class="rounded-full bg-slateBlue/20 px-3 py-1 text-sm font-bold text-lightBlue ring-1 ring-lightBlue/30">{{ tool }}</span>
          }
        </div>
        <p class="text-base leading-7 text-white/78">{{ project().summary }}</p>
        <div class="mt-auto flex flex-wrap items-center gap-3 text-sm text-white/60">
          <span>{{ project().date }}</span>
          <span class="h-1.5 w-1.5 rounded-full bg-indigo-bloom"></span>
          <span>{{ project().duration }}</span>
        </div>
        @if (project().links?.length) {
          <div class="flex flex-wrap gap-3">
            @for (link of project().links; track link.url) {
              <a [href]="link.url" target="_blank" class="focus-ring rounded bg-lightBlue px-4 py-2 font-bold text-ink transition hover:bg-white">{{ link.label }}</a>
            }
          </div>
        }
      </div>
    </article>
  `
})
export class ProjectCardComponent {
  project = input.required<Project>();
}
