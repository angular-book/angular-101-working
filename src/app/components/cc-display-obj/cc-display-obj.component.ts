import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output() locationChanged = new EventEmitter<boolean>();

  toggleLocal() {
    this.locationChanged.emit(!this.friend.local);
  }
}
