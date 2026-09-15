import { AsyncPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { TimelineEvent } from '../../../core/models/timeline-event.model';
import { TimelineService } from '../../../core/services/timeline.service';
import { ModalComponent } from '../../../shared/components/modal.component';
import { PortfolioButtonComponent } from '../../../shared/components/portfolio-button.component';
import { SectionTitleComponent } from '../../../shared/components/section-title.component';

@Component({
  selector: 'app-timeline-section',
  standalone: true,
  imports: [AsyncPipe, ModalComponent, PortfolioButtonComponent, SectionTitleComponent],
  template: `
    <section class="container-page py-20">
      <app-section-title label="Mon parcours" />

      <div class="relative mx-auto max-w-5xl">
        <div class="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-lightBlue via-slateBlue to-indigo-bloom sm:left-1/2"></div>

        <div class="grid gap-10">
          @for (event of timelineEvents$ | async; track event.id; let index = $index) {
            <article class="relative grid gap-5 sm:grid-cols-2 sm:gap-12">
              <div class="absolute left-5 top-7 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white bg-indigo-bloom shadow-[0_0_0_0.45rem_rgba(149,195,198,0.18)] sm:left-1/2"></div>

              <div [class.sm:col-start-2]="index % 2 === 0" [class.sm:text-left]="index % 2 === 0" [class.sm:text-right]="index % 2 !== 0" class="pl-12 sm:pl-0">
                <p class="font-accent text-2xl font-bold text-white">{{ event.period }}</p>
                @if (event.location) {
                  <p class="mt-1 font-accent text-sm font-bold uppercase tracking-[0.18em] text-white/45">{{ event.location }}</p>
                }
                <div class="mt-5 inline-block">
                  <app-portfolio-button [label]="event.title" shape="rectangle" variant="dark" (clicked)="selectEvent(event)" />
                </div>
                <p class="mt-5 text-base leading-7 text-white/70">{{ event.summary }}</p>
              </div>
            </article>
          }
        </div>
      </div>

      @if (selectedEvent(); as event) {
        <app-modal [open]="true" [title]="event.period" (closed)="clearSelection()">
          <div class="mt-8">
            <p class="font-accent text-4xl font-bold text-white">{{ event.title }}</p>
            @if (event.location) {
              <p class="mt-2 font-accent text-sm font-bold uppercase tracking-[0.18em] text-lightBlue">{{ event.location }}</p>
            }
            <p class="mt-6 border-l-2 border-lightBlue pl-5 text-lg leading-8 text-white/76">{{ event.description }}</p>
            <ul class="mt-7 grid gap-3 text-white/78">
              @for (detail of event.details; track detail) {
                <li class="rounded border border-white/10 bg-white/[0.04] px-4 py-3">{{ detail }}</li>
              }
            </ul>
          </div>
        </app-modal>
      }
    </section>
  `
})
export class TimelineSectionComponent {
  private readonly timelineService = inject(TimelineService);

  readonly timelineEvents$ = this.timelineService.getTimelineEvents();
  readonly selectedEvent = signal<TimelineEvent | null>(null);

  selectEvent(event: TimelineEvent): void {
    this.selectedEvent.set(event);
  }

  clearSelection(): void {
    this.selectedEvent.set(null);
  }
}
