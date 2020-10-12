import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // todoList: Todo[] = [{
  //   id: 1,
  //   name: 'Task 1',
  //   status: false
  // }, {
  //   id: 2,
  //   name: 'Task 2',
  //   status: true
  // }];
  todoList: Todo[] = [];

  constructor() {
    this.getTodoFromStorage();
  }

  getAllTodo(): Todo[] {
    return this.todoList;
  }

  addTodoItem(name: string) {
    const id = this.todoList.length > 0 ? this.todoList[this.todoList.length - 1].id + 1 : 0;
    this.todoList.push({
      id,
      name,
      status: false
    });
    this.setTodoToStorage();
  }

  changeStatusTodo(id: number, status: boolean) {
    const index = this.todoList.findIndex((todo) => todo.id === id);
    this.todoList[index].status = status;
    this.setTodoToStorage();
  }

  changeAll(status: boolean) {
    this.todoList.forEach((todo) => {
      todo.status = status;
    });
    this.setTodoToStorage();
  }

  private getTodoFromStorage() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      this.todoList = todos;
    }
  }

  private setTodoToStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }
}
