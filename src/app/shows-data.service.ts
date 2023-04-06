import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { ShowCreate, Showitem } from './models';

@Injectable({
  providedIn: 'root'
})
export class ShowsDataService {

  private store: Store = {
    shows: [],
    streamingServices: ['Disney+', 'HBO Max', 'Netflix', 'Amazon Prime']
  }
  private readonly subject = new BehaviorSubject<Store>(this.store);
  private loaded = false;

  private readonly http = inject(HttpClient);

  constructor() {
    this.loadData().pipe(
      tap(data => this.store.shows = data),
      tap(() => this.subject.next(this.store))
    ).subscribe();
  }

  getShows() {
    return this.subject
      .asObservable().pipe(
        map(s => s.shows)
      )
  }

  getStreamingPlatforms() {
    return this.subject.asObservable().pipe(map(s => s.streamingServices))
  }

  addShow(value: ShowCreate) {
    this.http.post<Showitem>('http://api.angular-book.com/shows', value)
      .pipe(
        tap(show => this.store.shows.unshift(show)),
        tap(() => this.subject.next(this.store))
      )
      .subscribe();
  }

  private loadData() {
    return this.http.get<{ _embedded: Showitem[] }>('http://api.angular-book.com/shows')
      .pipe(
        map(response => response._embedded)
      )
  }
}

type Store = {
  shows: Showitem[],
  streamingServices: string[]
}