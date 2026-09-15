import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

type ButtonShape = 'round' | 'rectangle';
type ButtonVariant = 'light' | 'dark' | 'secondary';
type ButtonIcon = 'none' | 'arrow-right';

@Component({
  selector: 'app-portfolio-button',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (routerLink()) {
      <a [routerLink]="routerLink()" class="portfolio-button focus-ring" [class.is-round]="shape() === 'round'" [class.is-light]="variant() === 'light'" [class.is-dark]="variant() === 'dark'" [class.is-secondary]="variant() === 'secondary'" [class.has-icon]="icon() !== 'none'">
        <span class="button-label">{{ label() }}</span>
        @if (icon() === 'arrow-right') {
          <svg class="button-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        }
        <span class="button-border" aria-hidden="true"></span>
      </a>
    } @else if (href()) {
      <a [href]="href()" class="portfolio-button focus-ring" [class.is-round]="shape() === 'round'" [class.is-light]="variant() === 'light'" [class.is-dark]="variant() === 'dark'" [class.is-secondary]="variant() === 'secondary'" [class.has-icon]="icon() !== 'none'">
        <span class="button-label">{{ label() }}</span>
        @if (icon() === 'arrow-right') {
          <svg class="button-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        }
        <span class="button-border" aria-hidden="true"></span>
      </a>
    } @else {
      <button type="button" class="portfolio-button focus-ring" [class.is-round]="shape() === 'round'" [class.is-light]="variant() === 'light'" [class.is-dark]="variant() === 'dark'" [class.is-secondary]="variant() === 'secondary'" [class.has-icon]="icon() !== 'none'" (click)="clicked.emit()">
        <span class="button-label">{{ label() }}</span>
        @if (icon() === 'arrow-right') {
          <svg class="button-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        }
        <span class="button-border" aria-hidden="true"></span>
      </button>
    }
  `,
  styles: `
    :host {
      display: inline-block;
    }

    .portfolio-button {
      --button-radius: 999px;
      --button-padding: 1rem 1.65rem;
      --button-shadow-x: 0.42rem;
      --button-shadow-y: 0.42rem;
      --button-border: #f8fbff;
      --button-surface: #14001f;
      --button-text: #f8fbff;
      --button-shadow: #95c3c6;
      --button-fill: #95c3c6;
      --button-hover-text: #14001f;

      align-items: center;
      background: var(--button-fill);
      border: 0;
      border-radius: var(--button-radius);
      color: var(--button-text);
      display: inline-flex;
      font-family: Biko, 'Segoe UI', ui-sans-serif, system-ui, sans-serif;
      font-size: 1rem;
      font-weight: 700;
      justify-content: center;
      line-height: 1;
      min-height: 3.45rem;
      overflow: visible;
      padding: var(--button-padding);
      position: relative;
      text-decoration: none;
      text-shadow: 0 2px 10px var(--button-text-shadow, rgba(9, 5, 15, 0.74));
      transition: color 220ms ease, transform 220ms ease;
      z-index: 0;
    }

    button.portfolio-button {
      cursor: pointer;
    }

    .portfolio-button::before,
    .portfolio-button::after,
    .button-border {
      border-radius: var(--button-radius);
      content: '';
      inset: 0;
      position: absolute;
      transition: transform 260ms ease, opacity 260ms ease;
    }

    .portfolio-button::before {
      background: var(--button-surface);
      z-index: 0;
    }

    .portfolio-button::after {
      background: var(--button-shadow);
      transform: translate(var(--button-shadow-x), var(--button-shadow-y));
      z-index: -2;
    }

    .button-label {
      position: relative;
      z-index: 3;
    }

    .portfolio-button.has-icon {
      gap: 0.55rem;
    }

    .button-icon {
      height: 1.2em;
      position: relative;
      stroke: currentColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 2.25;
      transition: transform 220ms ease;
      width: 1.2em;
      z-index: 3;
    }

    .button-border {
      border: 2px solid var(--button-border);
      pointer-events: none;
      z-index: 4;
    }

    .portfolio-button:hover,
    .portfolio-button:focus-visible {
      color: var(--button-hover-text);
      transform: translate(0.18rem, 0.18rem);
    }

    .portfolio-button:hover::before,
    .portfolio-button:focus-visible::before {
      opacity: 0;
      transform: scaleX(0);
      transform-origin: left center;
    }

    .portfolio-button:hover::after,
    .portfolio-button:focus-visible::after {
      transform: translate(0, 0);
    }

    .portfolio-button:hover .button-icon,
    .portfolio-button:focus-visible .button-icon {
      transform: translateX(0.16rem);
    }

    .portfolio-button.is-round {
      --button-radius: 9999px;
      --button-padding: 0;
      --button-shadow-x: 0.5rem;
      --button-shadow-y: 0.5rem;

      aspect-ratio: 1;
      min-height: 0;
      padding: 0;
      text-align: center;
      width: clamp(7.5rem, 14vw, 10rem);
    }

    .portfolio-button.is-round:hover::before,
    .portfolio-button.is-round:focus-visible::before {
      opacity: 0;
      transform: scale(0);
      transform-origin: center;
    }

    .portfolio-button.is-light {
      --button-border: #410066;
      --button-surface: #f8fbff;
      --button-text: #410066;
      --button-shadow: #410066;
      --button-fill: #410066;
      --button-hover-text: #f8fbff;
      --button-text-shadow: none;
    }

    .portfolio-button.is-dark {
      --button-border: #f8fbff;
      --button-surface: #14001f;
      --button-text: #f8fbff;
      --button-shadow: #95c3c6;
      --button-fill: #95c3c6;
      --button-hover-text: #14001f;
    }

    .portfolio-button.is-secondary {
      --button-border: rgba(149, 195, 198, 0.62);
      --button-surface: rgba(9, 5, 15, 0.84);
      --button-text: #95c3c6;
      --button-shadow: rgba(94, 96, 206, 0.58);
      --button-fill: rgba(94, 96, 206, 0.58);
      --button-hover-text: #f8fbff;
      --button-text-shadow: none;
    }

    :host(.hero-cta-button) .portfolio-button {
      --button-padding: 1.15rem 1.95rem;
      --button-shadow-x: 0.55rem;
      --button-shadow-y: 0.55rem;

      font-size: 1.08rem;
      min-height: 3.8rem;
    }

    :host(.project-action-button) .portfolio-button {
      --button-padding: 0.68rem 1rem;
      --button-shadow-x: 0.24rem;
      --button-shadow-y: 0.24rem;

      font-size: 0.88rem;
      min-height: 2.55rem;
      text-shadow: none;
    }

    :host(.project-action-button) .button-border {
      border-width: 1px;
    }
  `
})
export class PortfolioButtonComponent {
  label = input.required<string>();
  shape = input<ButtonShape>('rectangle');
  variant = input<ButtonVariant>('dark');
  icon = input<ButtonIcon>('none');
  routerLink = input<string | null>(null);
  href = input<string | null>(null);
  clicked = output<void>();
}
