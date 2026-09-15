import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProjectsPageComponent } from './features/projects/projects-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Tessa Germain | Portfolio' },
  {
    path: 'projets/:category',
    component: ProjectsPageComponent,
    title: 'Tessa Germain | Projets'
  },
  { path: '**', redirectTo: '' }
];
