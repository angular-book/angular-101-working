import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CcDisplayComponent } from '../cc-display/cc-display.component';
import { CcDisplayObjComponent } from '../cc-display-obj/cc-display-obj.component';

@Component({
  selector: 'app-component-communication',
  standalone: true,
  imports: [CommonModule, CcDisplayComponent, CcDisplayObjComponent],
  template: `
    <p>
      Component Communication
    </p>
    <div>
      <app-cc-display text="Hello from Component" />
      <app-cc-display text="messageToDisplay" />
      <app-cc-display [text]="messageToDisplay" />
      <app-cc-display [text]="messageToDisplay" />
      <app-cc-display (hovered)="doIt()" [text]="secondMessage" />
    </div>
    <div>
      <pre>{{ friend | json }}</pre>
      <app-cc-display-obj [friend]="friend" (locationChanged)="toggleFriendIsLocal($event)" />
      <div class="notification" *ngIf="displayMessage">
        <p>Location Changed!</p>
      </div>
    </div>
  `,
  styles: [
    ".notification { background-color: goldenrod; padding: 2rem; border: 2px solid black }"
  ]
})
export class ComponentCommunicationComponent {
  messageToDisplay = 'Angular is Rad';
  secondMessage = 'Touch Me!';
  displayMessage = false;
  friend = {
    name: 'Karl',
    email: 'karl@aol.com',
    local: true
  }
  doIt() {
    this.secondMessage = 'That tickles!';
  }
  toggleFriendIsLocal(local: boolean) {
    this.friend.local = local;
    this.displayMessage = true;
    setTimeout(() => this.displayMessage = false, 3000);
  }
}
