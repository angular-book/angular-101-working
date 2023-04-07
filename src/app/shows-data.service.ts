import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, OperatorFunction, map, tap } from 'rxjs';
import { ShowCreate, ShowItem } from './models';

@Injectable({
  providedIn: 'root'
})
export class ShowsDataService {


  private store: Store = {
    shows: [],
    streamingServices: []
  }
  private readonly subject = new BehaviorSubject<Store>(this.store);
  private loaded = false;

  private readonly http = inject(HttpClient);

  constructor() {
    this.loadShowData().pipe(
      tap(data => this.store.shows = data),
      tap(() => this.subject.next(this.store))
    ).subscribe();
    this.loadPlatformData().pipe(
      tap(data => this.store.streamingServices = data),
      tap(() => this.subject.next(this.store))
    ).subscribe();

  }
  query<Result>(selector: (s: Store) => Result) {
    return this.subject.asObservable().pipe(map(selector));
  }

  notify(event: ShowEvents) {
    if (event.type === 'added') {
      this.addShow(event.payload);
    }
  }

  addShow(value: ShowCreate) {
    this.http.post<ShowItem>('http://api.angular-book.com/shows', value)
      .pipe(
        tap(show => this.store.shows.unshift(show)),
        tap(() => this.subject.next(this.store))
      )
      .subscribe();
  }

  private loadShowData() {
    return this.http.get<{ _embedded: ShowItem[] }>('http://api.angular-book.com/shows')
      .pipe(
        map(response => response._embedded)
      )
  }
  private loadPlatformData() {
    return this.http.get<{ _embedded: string[] }>('http://api.angular-book.com/platforms')
      .pipe(
        map(response => response._embedded)
      )
  }
}

type Store = {
  shows: ShowItem[],
  streamingServices: string[]
}

interface Event {
  type: string;
}

// Selectors
export const selectShows = (s: Store) => s.shows;
export const selectStreamingPlatforms = (s: Store) => s.streamingServices;
export const selectNumberOfShows = (s: Store) => s.shows.length;

// Actions
export interface ShowAdded extends Event {
  type: 'added'
  payload: ShowCreate
}
export interface ShowRemoved extends Event {
  type: 'removed'
}

export type ShowEvents = ShowAdded | ShowRemoved;