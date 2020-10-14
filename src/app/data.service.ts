import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, of, Subject, throwError } from 'rxjs';
import { Post } from './data.model';
import { catchError, map, mergeMap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  newPost = new Subject();
  viewCatalog = new BehaviorSubject<string>('list');

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<any> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      map((post) => {
        console.log(post);
        post.forEach((p) => {
          p['date'] = new Date();
        })
        return post;
      }),
      catchError(this.handleError)
    );
  }

  addPost(post) {
    this.http.post<Post>('https://jsonplaceholder.typicode.com/postssdfs', post)
    .pipe(
      catchError(this.handleError)
    )
    .subscribe(
      (res) => {
        this.newPost.next(res);
      },
      (er) => {
        this.newPost.error(er);
      }
    );
  }

  paralleRequest() {
    forkJoin(
      this.http.get('https://jsonplaceholder.typicode.com/posts'),
      this.http.get('https://jsonplaceholder.typicode.com/users')
    ).subscribe((res) => {
      console.log(res);
    });
  }

  consecutiveRequest() {
    this.http.get('https://jsonplaceholder.typicode.com/users?userName=Bret')
      .pipe(
        map((users) => {
          console.log(users[0]);
          return users[0];
        }),
        mergeMap((user) => {
          return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        })
      ).subscribe((res) => {
        console.log(res);
      });
  }

  private handleError(er) {
    console.log(er);
    let msg;
    switch (er.status) {
      case 404:
        msg = 'Not found';
        break;
    }
    return throwError(msg);
  }
}
