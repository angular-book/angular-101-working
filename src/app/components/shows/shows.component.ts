import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsDataService } from 'src/app/shows-data.service';
import { ShowsEntryComponent } from "../shows-entry/shows-entry.component";

@Component({
  selector: 'app-shows',
  standalone: true,
  template: `
      <pre> {{ shows$ | async | json }}</pre>
      <div>
        <app-shows-entry />
      </div>
  `,
  styles: [],
  imports: [CommonModule, ShowsEntryComponent]
})
export class ShowsComponent {
  private readonly service = inject(ShowsDataService);
  shows$ = this.service.getShows();
}
