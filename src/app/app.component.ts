import { Component } from '@angular/core';
import { MastheadComponent, DisplayingDataComponent } from './components';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MastheadComponent, DisplayingDataComponent, RouterOutlet],
  template: `
  <app-masthead />
  <main>
    <router-outlet />
  </main>
  `,
  styles: [
    "main {margin: 2em}"
  ]
})
export class AppComponent {

}
