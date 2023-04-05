import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cc-display-obj[friend]',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <p>{{friend.name}} {{friend.email}} {{friend.local}}</p>
      <button (click)="toggleLocal()">Toggle Local</button>
  </div>
  `,
  styles: [
  ]
})
export class CcDisplayObjComponent {
  @Input() friend = { name: '', email: '', local: false }

  toggleLocal() {
    this.friend.local = !this.friend.local;
  }
}
