import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Priority, Todo } from 'src/app/shared/models/todo.model';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-single',
  templateUrl: './todo-single.component.html',
  styleUrls: ['./todo-single.component.scss']
})
export class TodoSingleComponent implements OnInit {

  id: number;
  todo: Todo;
  day: number;
  readonly priority = Priority;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getTodoSingle(this.id).subscribe((todo) => {
      this.todo = todo;
      this.day = +((+new Date(todo.endDate) - +new Date()) / 1000 / 60 / 60).toFixed(1);
    });
  }

}
