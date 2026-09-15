import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UsefulLinksService } from '../../../core/services/useful-links.service';
import { SectionTitleComponent } from '../../../shared/components/section-title.component';

@Component({
  selector: 'app-useful-links-section',
  standalone: true,
  imports: [AsyncPipe, NgTemplateOutlet, SectionTitleComponent],
  template: `
    <section class="container-page py-16">
      <app-section-title label="Liens utiles" />

      <div class="grid justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        @for (link of usefulLinks$ | async; track link.id) {
          @if (link.url) {
            <a
              [href]="link.url"
              [attr.target]="link.url.startsWith('mailto:') ? null : '_blank'"
              rel="noreferrer"
              class="link-card focus-ring group"
            >
              <ng-container [ngTemplateOutlet]="linkContent" [ngTemplateOutletContext]="{ $implicit: link }" />
            </a>
          } @else {
            <div class="link-card is-disabled">
              <ng-container [ngTemplateOutlet]="linkContent" [ngTemplateOutletContext]="{ $implicit: link }" />
            </div>
          }
        }
      </div>

      <ng-template #linkContent let-link>
        <div class="relative z-10 flex items-center gap-2.5">
          <div class="grid h-7 w-7 shrink-0 place-items-center rounded border border-lightBlue/50 bg-lightBlue/10 text-lightBlue transition group-hover:border-ink/40 group-hover:bg-ink/10 group-hover:text-ink">
            @switch (link.id) {
              @case ('github') {
                <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.19-3.37-1.19a2.65 2.65 0 0 0-1.11-1.46c-.91-.62.07-.61.07-.61a2.1 2.1 0 0 1 1.53 1.03 2.13 2.13 0 0 0 2.91.83 2.13 2.13 0 0 1 .63-1.34c-2.22-.25-4.55-1.11-4.55-4.94a3.86 3.86 0 0 1 1.03-2.68 3.6 3.6 0 0 1 .1-2.65s.84-.27 2.75 1.02A9.48 9.48 0 0 1 12 5.98a9.48 9.48 0 0 1 2.5.34c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65a3.86 3.86 0 0 1 1.03 2.68c0 3.84-2.34 4.69-4.57 4.94a2.39 2.39 0 0 1 .68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
                </svg>
              }
              @case ('linkedin') {
                <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.94 8.9H3.67V20h3.27V8.9ZM5.3 4a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8Zm15.03 9.86c0-3.35-1.79-4.9-4.18-4.9a3.58 3.58 0 0 0-3.22 1.77V8.9H9.8V20h3.27v-5.5c0-1.45.27-2.86 2.08-2.86 1.78 0 1.8 1.67 1.8 2.95V20h3.27v-6.14h.1Z" />
                </svg>
              }
              @case ('gmail') {
                <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              }
              @case ('cv') {
                <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M12 18v-6" />
                  <path d="m9 15 3 3 3-3" />
                </svg>
              }
            }
          </div>
          <span class="font-accent text-base font-bold text-white transition group-hover:text-ink">{{ link.label }}</span>
        </div>
      </ng-template>
    </section>
  `,
  styles: `
    .link-card {
      background: #09050f;
      border: 2px solid rgba(248, 251, 255, 0.84);
      border-radius: 0.5rem;
      color: #f8fbff;
      display: block;
      max-width: 11.75rem;
      padding: 0.5rem 0.65rem;
      position: relative;
      text-decoration: none;
      transition: color 220ms ease, transform 220ms ease;
      width: 100%;
      z-index: 0;
    }

    .link-card::before,
    .link-card::after {
      border-radius: 0.5rem;
      content: '';
      inset: 0;
      position: absolute;
      transition: opacity 240ms ease, transform 240ms ease;
    }

    .link-card::before {
      background: #09050f;
      z-index: -1;
    }

    .link-card::after {
      background: #95c3c6;
      transform: translate(0.24rem, 0.24rem);
      z-index: -2;
    }

    .link-card:hover,
    .link-card:focus-visible {
      color: #14001f;
      transform: translate(0.12rem, 0.12rem);
    }

    .link-card:hover::before,
    .link-card:focus-visible::before {
      opacity: 0;
      transform: scaleY(0);
      transform-origin: top center;
    }

    .link-card:hover::after,
    .link-card:focus-visible::after {
      transform: translate(0, 0);
    }

    .link-card.is-disabled {
      border-style: dashed;
      opacity: 0.6;
    }

    .link-card.is-disabled::after {
      background: #5e60ce;
    }
  `
})
export class UsefulLinksSectionComponent {
  private readonly usefulLinksService = inject(UsefulLinksService);

  readonly usefulLinks$ = this.usefulLinksService.getUsefulLinks();
}
