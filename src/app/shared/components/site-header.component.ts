import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-40 border-b border-white/10 bg-night/85 backdrop-blur-xl">
      <nav class="container-page flex h-16 items-center justify-between">
        <a routerLink="/" class="focus-ring font-title text-xl text-white">Tessa Germain</a>
        <div class="flex items-center gap-2 text-sm font-bold">
          <a routerLink="/" routerLinkActive="text-lightBlue" [routerLinkActiveOptions]="{ exact: true }" class="focus-ring rounded px-3 py-2 text-white/80 hover:text-white">Accueil</a>
          <a routerLink="/projets/development" routerLinkActive="text-lightBlue" class="focus-ring rounded px-3 py-2 text-white/80 hover:text-white">Developpement</a>
          <a routerLink="/projets/design" routerLinkActive="text-lightBlue" class="focus-ring rounded px-3 py-2 text-white/80 hover:text-white">Design</a>
        </div>
      </nav>
    </header>
  `
})
export class SiteHeaderComponent {}
