import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lesson';
  numberLesson = 1;
  tacks = ['intro', 'start project', 'build', 'homework'];
  posts = [{
    title: 'post 1',
    text: 'test post 1'
  }, {
    title: 'post 2',
    text: 'test post 2'
  }, {
    title: 'post 3',
    text: 'test post 3'
  }]
  state = false;

  dropdown() {
    this.state = !this.state;
  }
}
