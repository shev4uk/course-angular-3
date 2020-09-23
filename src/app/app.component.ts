import { Component, OnInit } from '@angular/core';
import { Post, StatePost } from './app.model';
import { Calc } from './helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  number = '10';
  result: number | string;

  skills: string[] = ['html', 'css', 'js', 'angular'];

  posts: Post[];

  status = StatePost;

  countPost: number;

  _age: number;

  set age(value: number) {
    if (value < 18) {
      this._age = 0;
    } else {
      this._age = value;
    }
  }

  get age() {
    return this._age;
  }

  calc: Calc;

  constructor() {
    this.calc = new Calc();
  }

  ngOnInit() {
    Calc.showName();

    this.age = 15;
    console.log(this.age);

    this.result = this.number + 10;

    this.posts = [{
      id: 0,
      title: 'Post 1',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga culpa omnis in autem magni totam perspiciatis earum, asperiores hic corporis nam tempore quasi, reiciendis quia. Delectus deserunt vel repellendus ex?',
      author: 'Author 1',
      status: 2
    }, {
      id: 1,
      title: 'Post 2',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga culpa omnis in autem magni totam perspiciatis earum, asperiores hic corporis nam tempore quasi, reiciendis quia. Delectus deserunt vel repellendus ex?',
      author: 'Author 2',
      status: 1
    }, {
      id: 2,
      title: 'Post 3',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga culpa omnis in autem magni totam perspiciatis earum, asperiores hic corporis nam tempore quasi, reiciendis quia. Delectus deserunt vel repellendus ex?',
      author: 'Author 3',
      status: 0
    }, {
      id: 3,
      title: 'Post 4',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga culpa omnis in autem magni totam perspiciatis earum, asperiores hic corporis nam tempore quasi, reiciendis quia. Delectus deserunt vel repellendus ex?',
      author: 'Author 1',
      status: 2
    }];
    this.countPost = this.getCountPost();

    console.log(this.calc.calcSelary(500, 19));
  }

  getCountPost(): number {
    return this.posts.filter((post) => post.status === this.status['publish']).length;
  }

}
