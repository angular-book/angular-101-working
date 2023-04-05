import { Component } from '@angular/core';
import { MastheadComponent, DisplayingDataComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MastheadComponent, DisplayingDataComponent],
  template: `
  <app-masthead />
  <main>
    <app-displaying-data />
  </main>
  `,
  styles: [
    "main {margin: 2em}"
  ]
})
export class AppComponent {

}
