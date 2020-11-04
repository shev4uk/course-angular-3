import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getTodos(options): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}todos`, {params: options});
  }

  getTodoSingle(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}todos/${id}`);
  }

  addTodo(todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.apiUrl}todos`, todo);
  }

  editTodo(todo, id): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}todos/${id}`, todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${this.apiUrl}todos/${id}`);
  }
}
