import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

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

  showLevel(event) {
    console.log(event);
    this.level = event;
    this.userSelect.push(event);
  }

  deleteUser(i) {
    this.userSelect.splice(i, 1);
  }

}
