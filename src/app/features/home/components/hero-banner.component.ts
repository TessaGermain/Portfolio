import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, PLATFORM_ID, inject, signal } from '@angular/core';
import { PortfolioButtonComponent } from '../../../shared/components/portfolio-button.component';

interface CloudLayer {
  src: string;
  className: string;
  speedX: number;
  speedY: number;
}

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [PortfolioButtonComponent],
  template: `
    <section class="hero-parallax relative isolate min-h-screen overflow-hidden bg-night">
      <div class="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_72%_18%,rgba(149,195,198,0.22),transparent_15rem),linear-gradient(180deg,#09050f_0%,#14001f_45%,#410066_100%)]"></div>
      <div class="stars absolute inset-0 -z-20" [style.transform]="parallaxTransform(0.08, -0.02)"></div>
      <div class="moon absolute right-[20%] top-[9%] -z-10 h-20 w-20 rounded-full bg-[#d9d0ff] shadow-[0_0_70px_rgba(217,208,255,0.65)] sm:h-28 sm:w-28" [style.transform]="parallaxTransform(0.18, -0.04)"></div>

      <div class="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-night via-night/70 to-transparent"></div>

      @for (cloud of cloudLayers; track cloud.src) {
        <img [src]="cloud.src" alt="" aria-hidden="true" class="pointer-events-none absolute select-none" [class]="cloud.className" [style.transform]="parallaxTransform(cloud.speedY, cloud.speedX)" />
      }

      <div class="container-page relative z-10 grid min-h-screen items-center gap-10 pt-12 lg:grid-cols-[0.95fr_1.05fr]" [style.transform]="parallaxTransform(0.04, 0)">
        <div class="max-w-3xl pb-36 pt-16 sm:pb-44 lg:pb-28">
          <p class="mb-5 font-accent font-bold uppercase tracking-[0.32em] text-lightBlue">Portfolio</p>
          <h1 class="font-title max-w-[10ch] text-6xl font-black leading-[0.95] text-white drop-shadow-[0_10px_0_rgba(65,0,102,0.45)] sm:text-8xl lg:text-9xl">
            Tessa Germain
          </h1>
          <p class="mt-8 font-accent text-3xl font-bold text-[#b9f2c8] sm:text-4xl">Développeuse full-stack</p>
          <app-portfolio-button class="hero-cta-button mt-12" label="Voir mes projets" routerLink="/projets/development" shape="rectangle" variant="dark" icon="arrow-right" />
        </div>

        <div class="relative min-h-[26rem] lg:min-h-[38rem]">
          <div class="absolute right-[8%] top-[12%] h-72 w-72 rounded-full bg-indigo-bloom/20 blur-3xl sm:h-96 sm:w-96"></div>
          <div class="absolute right-[13%] top-[18%] w-44 sm:w-56 lg:w-64" [style.transform]="parallaxTransform(0.1, 0.05)">
            <img src="/assets/images/chibi.png" alt="Illustration chibi de Tessa Germain" class="chibi-float w-full drop-shadow-[0_30px_55px_rgba(0,0,0,0.55)]" />
          </div>
        </div>
      </div>

      <div class="scroll-cue absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 font-accent text-xs font-bold uppercase tracking-[0.28em] text-white/55 sm:flex">
        <span>Scroll</span>
        <span class="scroll-cue__line">
          <span class="scroll-cue__dot"></span>
        </span>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }

    .hero-parallax {
      perspective: 1px;
      transform-style: preserve-3d;
    }

    .stars {
      background-image:
        radial-gradient(circle, rgba(255, 255, 255, 0.95) 0 1px, transparent 1.5px),
        radial-gradient(circle, rgba(149, 195, 198, 0.9) 0 2px, transparent 3px),
        radial-gradient(circle, rgba(255, 255, 255, 0.55) 0 1px, transparent 1.5px);
      background-position: 18px 26px, 120px 90px, 240px 170px;
      background-size: 170px 190px, 360px 310px, 260px 230px;
      will-change: transform;
    }

    .moon {
      animation: moon-glow 6s ease-in-out infinite alternate;
    }

    .cloud-back {
      width: clamp(18rem, 34vw, 48rem);
      opacity: 0.5;
      filter: invert(18%) sepia(57%) saturate(834%) hue-rotate(229deg) brightness(78%) contrast(93%);
      will-change: transform;
    }

    .cloud-mid {
      width: clamp(22rem, 44vw, 58rem);
      opacity: 0.58;
      filter: invert(37%) sepia(28%) saturate(766%) hue-rotate(188deg) brightness(89%) contrast(89%);
      will-change: transform;
    }

    .cloud-front {
      width: clamp(28rem, 58vw, 76rem);
      opacity: 0.68;
      filter: invert(75%) sepia(17%) saturate(422%) hue-rotate(137deg) brightness(88%) contrast(87%) drop-shadow(0 -24px 48px rgba(149, 195, 198, 0.2));
      will-change: transform;
    }

    .cloud-ornament {
      width: clamp(14rem, 26vw, 34rem);
      opacity: 0.34;
      filter: invert(80%) sepia(18%) saturate(698%) hue-rotate(180deg) brightness(96%) contrast(92%);
      will-change: transform;
    }

    .cloud-left-top { left: -5rem; top: 13%; }
    .cloud-left-mid { left: -2rem; top: 47%; }
    .cloud-right-top { right: -7rem; top: 10%; }
    .cloud-right-mid { right: -6rem; top: 36%; }
    .cloud-bottom-left { left: -8rem; bottom: -8rem; }
    .cloud-bottom-center { left: 34%; bottom: -9rem; }
    .cloud-bottom-right { right: -9rem; bottom: -8.5rem; }
    .cloud-top-border { right: 22%; top: -7rem; opacity: 0.18; }

    .chibi-float {
      animation: chibi-float 5.8s ease-in-out infinite;
    }

    .scroll-cue {
      animation: scroll-cue-float 2.6s ease-in-out infinite;
    }

    .scroll-cue__line {
      background: rgba(248, 251, 255, 0.34);
      display: block;
      height: 3rem;
      overflow: hidden;
      position: relative;
      width: 1px;
    }

    .scroll-cue__dot {
      background: #95c3c6;
      border-radius: 999px;
      box-shadow: 0 0 14px rgba(149, 195, 198, 0.65);
      height: 0.45rem;
      left: 50%;
      position: absolute;
      top: 0;
      transform: translate(-50%, -100%);
      width: 0.45rem;
      animation: scroll-cue-dot 1.7s ease-in-out infinite;
    }

    @keyframes chibi-float {
      0%, 100% { transform: translate3d(0, 0, 0) rotate(-2deg); }
      50% { transform: translate3d(0, -1.3rem, 0) rotate(2deg); }
    }

    @keyframes moon-glow {
      from { box-shadow: 0 0 52px rgba(217, 208, 255, 0.48); }
      to { box-shadow: 0 0 86px rgba(217, 208, 255, 0.72); }
    }

    @keyframes scroll-cue-float {
      0%, 100% { transform: translate(-50%, 0); opacity: 0.58; }
      50% { transform: translate(-50%, 0.35rem); opacity: 0.9; }
    }

    @keyframes scroll-cue-dot {
      0% { transform: translate(-50%, -100%); opacity: 0; }
      24% { opacity: 1; }
      76% { opacity: 1; }
      100% { transform: translate(-50%, 3rem); opacity: 0; }
    }

    @media (prefers-reduced-motion: reduce) {
      .stars,
      .moon,
      .cloud-back,
      .cloud-mid,
      .cloud-front,
      .cloud-ornament {
        transform: none !important;
      }

      .chibi-float,
      .scroll-cue,
      .scroll-cue__dot {
        animation: none;
      }
    }
  `
})
export class HeroBannerComponent {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private animationFrame = 0;

  protected readonly scrollOffset = signal(0);

  cloudLayers: CloudLayer[] = [
    { src: '/assets/images/cloud_1.svg', className: 'cloud-back cloud-left-top', speedX: -0.04, speedY: 0.12 },
    { src: '/assets/images/cloud_2.svg', className: 'cloud-mid cloud-left-mid', speedX: 0.08, speedY: 0.28 },
    { src: '/assets/images/cloud_3.svg', className: 'cloud-back cloud-right-top', speedX: 0.05, speedY: 0.16 },
    { src: '/assets/images/cloud_4.svg', className: 'cloud-mid cloud-right-mid', speedX: -0.07, speedY: 0.32 },
    { src: '/assets/images/cloud_5.svg', className: 'cloud-front cloud-bottom-left', speedX: -0.12, speedY: 0.62 },
    { src: '/assets/images/cloud_6.svg', className: 'cloud-front cloud-bottom-center', speedX: 0.04, speedY: 0.7 },
    { src: '/assets/images/cloud_7.svg', className: 'cloud-front cloud-bottom-right', speedX: 0.13, speedY: 0.58 },
    { src: '/assets/images/cloud_8.svg', className: 'cloud-ornament cloud-top-border', speedX: -0.02, speedY: 0.22 }
  ];

  @HostListener('window:scroll')
  @HostListener('window:resize')
  updateParallax(): void {
    if (!isPlatformBrowser(this.platformId) || this.animationFrame) {
      return;
    }

    this.animationFrame = this.document.defaultView?.requestAnimationFrame(() => {
      const windowRef = this.document.defaultView;
      const hero = this.elementRef.nativeElement.querySelector('.hero-parallax');

      if (!windowRef || !hero) {
        return;
      }

      const rect = hero.getBoundingClientRect();
      const maxOffset = windowRef.innerHeight * 1.05;
      const offset = Math.min(Math.max(-rect.top, 0), maxOffset);

      this.scrollOffset.set(offset);
      this.animationFrame = 0;
    }) ?? 0;
  }

  protected parallaxTransform(speedY: number, speedX = 0): string {
    const scroll = this.scrollOffset();
    return `translate3d(${scroll * speedX}px, ${scroll * speedY}px, 0)`;
  }
}
