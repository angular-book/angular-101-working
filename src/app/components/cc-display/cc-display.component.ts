import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cc-display',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p (mouseenter)="onHover()">
      {{text}}
    </p>
  `,
  styles: [
  ]
})
export class CcDisplayComponent {
  @Input() text = '';

  @Output() hovered = new EventEmitter();
  onHover() {
    this.hovered.emit();
  }
}
