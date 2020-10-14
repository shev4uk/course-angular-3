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
  msgError: string;

  constructor(
    private data: DataService
  ) {}

  ngOnInit() {
    this.data.getPosts().subscribe(
      (data) => {
        console.log(data);
        this.posts = data;
      },
      (error) => {
        console.log(error);
        this.msgError = error;
      });

    this.data.newPost.subscribe(
      (post: Post) => {
        this.posts.unshift(post);
      },
      (error) => {
        console.log(error);
        this.msgError = error;
      }
    );

    this.data.viewCatalog.subscribe((view) => {
      console.log(view);
    });

    this.data.paralleRequest();
    this.data.consecutiveRequest();
  }
}
