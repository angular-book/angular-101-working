import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appToggle]',
  standalone: true,


})
export class ToggleDirective implements OnInit {

  @Input() intent: 'primary' | 'secondary' = 'primary';
  constructor(private el: ElementRef<HTMLDivElement>) {
    el.nativeElement.classList.add('toggle');
  }

  ngOnInit(): void {
    this.el.nativeElement.classList.add(this.intent);
  }
}
