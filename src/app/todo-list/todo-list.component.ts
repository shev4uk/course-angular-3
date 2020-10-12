import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  stateSelectAll = false;
  list: Todo[];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.list = this.todoService.getAllTodo();
    console.log(this.list);
  }

  selectAll() {
    this.todoService.changeAll(this.stateSelectAll);
    this.stateSelectAll = !this.stateSelectAll;
  }

}
