import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShortText]'
})
export class ShortTextDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'red';
  }

}
