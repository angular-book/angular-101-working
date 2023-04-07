import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsDataService } from 'src/app/shows-data.service';

@Component({
  selector: 'app-shows-list',
  standalone: true,
  imports: [CommonModule],
  template: `
   <ul>
    <li *ngFor="let show of shows$ | async">
      <p>{{show.title}} on {{show.streamingPlatform}}</p>
    </li>
   </ul>
  `,
  styles: [
  ]
})
export class ShowsListComponent {
  private readonly service = inject(ShowsDataService);
  shows$ = this.service.getShows();
}
