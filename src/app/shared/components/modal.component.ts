import { NgTemplateOutlet } from '@angular/common';
import { Component, HostListener, TemplateRef, input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    @if (open()) {
      <div class="fixed inset-0 z-50 grid place-items-center bg-black/65 px-5 py-8" role="dialog" aria-modal="true" [attr.aria-labelledby]="titleId" (click)="close()">
        <section class="max-h-[min(44rem,90vh)] w-full max-w-3xl overflow-hidden rounded-lg border border-white/15 bg-night" (click)="$event.stopPropagation()">
          <header class="flex items-start justify-between gap-6 border-b border-white/12 px-7 py-5 sm:px-8">
            <h2 [id]="titleId" class="font-title text-3xl text-white sm:text-4xl">{{ title() }}</h2>
            <button type="button" class="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded border border-white/15 text-white/70 transition hover:border-lightBlue hover:bg-white/5 hover:text-lightBlue" aria-label="Fermer la fenetre" (click)="close()">
              <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </header>

          <div class="max-h-[calc(min(44rem,90vh)-6.5rem)] overflow-auto px-7 py-6 sm:px-8 sm:py-7">

            @if (description()) {
              <p class="text-lg leading-8 text-white/76">{{ description() }}</p>
            }

            @if (template()) {
              <ng-container [ngTemplateOutlet]="template()" />
            } @else {
              <ng-content />
            }
          </div>
        </section>
      </div>
    }
  `
})
export class ModalComponent {
  open = input(false);
  title = input.required<string>();
  description = input<string | null>(null);
  template = input<TemplateRef<unknown> | null>(null);
  closed = output<void>();

  readonly titleId = `modal-title-${Math.random().toString(36).slice(2)}`;

  @HostListener('document:keydown.escape')
  close(): void {
    if (this.open()) {
      this.closed.emit();
    }
  }
}
