import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { Project, ProjectCategory, SkillCloudItem } from '../models/project.model';

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

  getSkillCloud(): Observable<SkillCloudItem[]> {
    return this.projects$.pipe(
      map((projects) => {
        const counts = projects.reduce((skills, project) => {
          new Set(project.tools).forEach((tool) => {
            skills.set(tool, (skills.get(tool) ?? 0) + 1);
          });

          return skills;
        }, new Map<string, number>());

        const values = [...counts.values()];
        const min = Math.min(...values);
        const max = Math.max(...values);
        const range = max - min || 1;

        return [...counts.entries()]
          .map(([label, count]) => ({
            label,
            count,
            weight: (count - min) / range
          }))
          .sort((first, second) => second.count - first.count || first.label.localeCompare(second.label));
      })
    );
  }
}
