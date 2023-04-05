import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appToggle]',
  standalone: true,

})
export class ToggleDirective {
  constructor(private el: ElementRef<HTMLDivElement>) {
    el.nativeElement.classList.add('toggle');
  }
}
