import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { TimelineEvent } from '../models/timeline-event.model';

@Injectable({ providedIn: 'root' })
export class TimelineService {
  private readonly http = inject(HttpClient);
  private readonly events$ = this.http.get<TimelineEvent[]>('/assets/data/timeline.json').pipe(
    map((events) =>
      [...events].sort(
        (firstEvent, secondEvent) =>
          new Date(secondEvent.startDate).getTime() - new Date(firstEvent.startDate).getTime()
      )
    ),
    shareReplay(1)
  );

  getTimelineEvents(): Observable<TimelineEvent[]> {
    return this.events$;
  }
}
