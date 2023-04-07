import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShowsEntryComponent } from "../shows-entry/shows-entry.component";
import { ShowsListComponent } from "../shows-list/shows-list.component";

@Component({
  selector: 'app-shows',
  standalone: true,
  template: `
  <section>
      <div>
          <p class="heading">Shows</p>
          <app-shows-list />
      </div>
      <div>
        <p class="heading">Add New Show</p>
        <app-shows-entry />
      </div>
  </section>
  `,
  styles: ["section { display: flex }",
    "div { padding: 5em }",
    ".heading { font-size: 2em; margin-bottom: 1em }"
  ],
  imports: [CommonModule, ShowsEntryComponent, ShowsListComponent]
})
export class ShowsComponent {

}
