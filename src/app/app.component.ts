import { Component } from '@angular/core';
import { Post } from './data.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[];

  constructor(
    private data: DataService
  ) {}

  ngOnInit() {
    this.data.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
