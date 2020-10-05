import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  @Output() clickOutside = new EventEmitter();

  @HostListener('click', ['$event']) onClick(event) {
    console.log(event.target.classList.contains('bg-modal'));
    if (event.target.classList.contains('bg-modal')) {
      this.clickOutside.emit();
    }

  }

  constructor(private el: ElementRef) { }

}
