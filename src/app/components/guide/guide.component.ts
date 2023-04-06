import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <p>
      Learning Guide
    </p>
    <ul>
      <li><a routerLink="/displaying-data">Displaying Data</a></li>
      <li><a routerLink="/component-communication">Component Communication</a></li>
      <li><a routerLink="/shows">Shows</a></li>
    </ul>
  `,
  styles: [
  ]
})
export class GuideComponent {

}
