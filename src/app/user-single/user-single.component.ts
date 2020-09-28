import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {

  @Input() userSingle;
  @Output() getLevel = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickUser(level) {
    console.log(level);
    this.getLevel.emit(level);
  }

}
