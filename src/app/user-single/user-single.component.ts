import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {

  @ViewChild('text', {static: false}) text: ElementRef;

  @Input() userSingle;
  @Input() device;
  @Output() getLevel = new EventEmitter();
  @Output() actionButton = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.device);
  }

  ngAfterViewInit() {
    let text = this.text.nativeElement;
    console.dir(text);
  }

  onClickUser(level) {
    console.log(level);
    this.getLevel.emit(level);
  }

  action(event) {
    this.actionButton.emit(event);
  }

}
