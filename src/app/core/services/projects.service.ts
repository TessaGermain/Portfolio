import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { Project, ProjectCategory } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly http = inject(HttpClient);
  private readonly projects$ = this.http
    .get<Project[]>('/assets/data/projects.json')
    .pipe(shareReplay(1));

  getProjects(): Observable<Project[]> {
    return this.projects$;
  }

  getFeaturedProjects(): Observable<Project[]> {
    return this.projects$.pipe(
      map((projects) => projects.filter((project) => project.featured))
    );
  }

  getProjectsByCategory(category: ProjectCategory): Observable<Project[]> {
    return this.projects$.pipe(
      map((projects) => projects.filter((project) => project.category === category))
    );
  }

  getFilters(category: ProjectCategory): Observable<string[]> {
    return this.getProjectsByCategory(category).pipe(
      map((projects) => [...new Set(projects.flatMap((project) => project.tools))].sort())
    );
  }
}
