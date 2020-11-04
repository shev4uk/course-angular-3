import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/shared/models/todo.model';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  loader = false;
  search = '';
  todos: Todo[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoSerive: TodoService
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    const params = this.route.snapshot.queryParams;
    if (params.hasOwnProperty('search')) {
      this.search = params.search;
    }
    this.todoSerive.getTodos(params).subscribe((todos) => {
      console.log(todos);
      this.loader = true;
      this.todos = todos;
    });
  }

  deleteTodo(id) {
    console.log(id);
    const todoId = this.todos.findIndex((todo) => todo.id === id);
    this.todos.splice(todoId, 1);
  }

  sortTodo(name, direction) {
    this.loader = false;
    this.todoSerive.getTodos({sortBy: name, order: direction}).subscribe((todos) => {
      this.loader = true;
      this.todos = todos;
      this.router.navigate(['/todo'], { queryParams: {sortBy: name, order: direction}, queryParamsHandling: '' });
    })
  }

  searchTodo() {
    console.log(this.search);
    this.loader = false;
    this.todoSerive.getTodos({search: this.search}).subscribe((todos) => {
      this.loader = true;
      this.todos = todos;
      this.router.navigate(['/todo'], { queryParams: {search: this.search}, queryParamsHandling: '' });
    })
  }

}
