import { Component } from '@angular/core';
import { MastheadComponent } from './components/masthead/masthead.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MastheadComponent],
  template: `
  <app-masthead />
  <main>
    <h1>Angular!</h1>
  </main>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'frontend';
}
