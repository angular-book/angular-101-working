import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-masthead',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header>
      <h1>Angular 101</h1>
      <p class="sub">Learning Angular</p>
      <a routerLink="guide">Guide</a>
  </header>
  `,
  styles: [
    "h1 { font-size: 3em}",
    ".sub { font-size: 1.5em }",
    "header { margin: 1em;}"
  ]
})
export class MastheadComponent {

}
