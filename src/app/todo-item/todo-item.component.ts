import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }

  changeStatus() {
    this.todoService.changeStatusTodo(this.todo.id, this.todo.status);
  }

}
