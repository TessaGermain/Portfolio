import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { UsefulLink } from '../models/useful-link.model';

@Injectable({ providedIn: 'root' })
export class UsefulLinksService {
  private readonly http = inject(HttpClient);
  private readonly links$ = this.http.get<UsefulLink[]>('/assets/data/useful-links.json').pipe(
    map((links) => [...links].sort((firstLink, secondLink) => firstLink.order - secondLink.order)),
    shareReplay(1)
  );

  getUsefulLinks(): Observable<UsefulLink[]> {
    return this.links$;
  }
}
