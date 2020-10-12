import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  formAddTodo: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.formAddTodo = this.fb.group({
      name: ['', Validators.required]
    });
  }

  addTodo() {
    this.todoService.addTodoItem(this.formAddTodo.get('name').value);
    this.formAddTodo.get('name').setValue('');
  }

}
