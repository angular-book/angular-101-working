import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToggleDirective } from 'src/app/directives/toggle.directive';

@Component({
  selector: 'app-cc-display-obj[friend]',
  standalone: true,
  imports: [CommonModule, ToggleDirective],
  template: `
    <div>
      <p>{{friend.name}} {{friend.email}} {{friend.local}}</p>
      <div appToggle intent="secondary">
        <input id="local" type="checkbox" (click)="toggleLocal()" [checked]="friend.local" />
        <label for="local">Toggle Local</label>
      </div>
  </div>
  `,
  styles: [
  ],
  styleUrls: ['../components.css']
})
export class CcDisplayObjComponent {
  @Input() friend = { name: '', email: '', local: false }
  @Output() locationChanged = new EventEmitter<boolean>();

  toggleLocal() {
    this.locationChanged.emit(!this.friend.local);
  }
}
