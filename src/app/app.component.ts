import { Component } from '@angular/core';
import { MastheadComponent } from './components/masthead/masthead.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MastheadComponent],
  template: `
  <app-masthead />
  <main>
  </main>
  `,
  styles: [
    "main {margin: 2em}"
  ]
})
export class AppComponent {

}
