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
      <app-cc-display-obj [friend]="friend" />
    </div>
  `,
  styles: [
  ]
})
export class ComponentCommunicationComponent {
  messageToDisplay = 'Angular is Rad';
  secondMessage = 'Touch Me!';
  friend = {
    name: 'Karl',
    email: 'karl@aol.com',
    local: true
  }
  doIt() {
    this.secondMessage = 'That tickles!';
  }
}
