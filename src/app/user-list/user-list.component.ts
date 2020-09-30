import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @ViewChild('wrap', {static: false}) wrap: ElementRef;

  users = [{
    name: 'User 1',
    photo: 'https://randomuser.me/api/portraits/men/75.jpg',
    position: 'front-end',
    level: 3
  }, {
    name: 'User 2',
    photo: 'https://randomuser.me/api/portraits/men/35.jpg',
    position: 'back-end',
    level: 2
  }, {
    name: 'User 3',
    photo: 'https://randomuser.me/api/portraits/men/67.jpg',
    position: 'manager',
    level: 2
  }];

  userSelect = [];

  level: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const wrap = this.wrap.nativeElement;
    wrap.scrollIntoView();
  }

  showLevel(event) {
    console.log(event);
    this.level = event;
    this.userSelect.push(event);
  }

  deleteUser(i) {
    this.userSelect.splice(i, 1);
  }

  actionUser(e) {
    console.log(e);
  }

}
