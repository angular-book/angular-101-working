import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-masthead',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <h1>Angular 101</h1>
      <p class="sub">Learning Angular</p>
  </header>
  `,
  styles: [
    "h1 { font-size: 3em}",
    ".sub { font-size: 1.5em }"
  ]
})
export class MastheadComponent {

}
