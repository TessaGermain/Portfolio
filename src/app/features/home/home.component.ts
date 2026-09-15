import { Component } from '@angular/core';
import { PortfolioButtonComponent } from '../../shared/components/portfolio-button.component';
import { SectionTitleComponent } from '../../shared/components/section-title.component';
import { HeroBannerComponent } from './components/hero-banner.component';
import { SkillsCloudSectionComponent } from './components/skills-cloud-section.component';
import { TimelineSectionComponent } from './components/timeline-section.component';
import { UsefulLinksSectionComponent } from './components/useful-links-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PortfolioButtonComponent, SectionTitleComponent, HeroBannerComponent, SkillsCloudSectionComponent, TimelineSectionComponent, UsefulLinksSectionComponent],
  template: `
    <main>
      <app-hero-banner />

      <app-useful-links-section />

      <app-skills-cloud-section />

      <app-timeline-section />

      <section class="container-page pb-24 pt-8">
        <app-section-title label="Mes projets" />

        <div class="mx-auto max-w-2xl text-center">
          <p class="text-base leading-8 text-white/68 sm:text-lg">
            Une sélection de projets réalisés au fil de mon parcours, entre développement, intégration, interfaces et expérimentations techniques.
          </p>

          <app-portfolio-button class="mt-8" label="Découvrir mes projets" routerLink="/projets/development" shape="rectangle" variant="dark" icon="arrow-right" />
        </div>
      </section>
    </main>
  `
})
export class HomeComponent {}
