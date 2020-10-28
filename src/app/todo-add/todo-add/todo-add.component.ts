import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  formTodoAdd: FormGroup;
  successSend = false;

  priorities = [
    {
      id: 0, name: 'Low'
    },
    {
      id: 1, name: 'Middle',
    },
    {
      id: 2, name: 'High'
    }
  ];

  get form() {
    return this.formTodoAdd.controls;
  }

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.formTodoAdd = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(300)]],
      endDate: ['', [Validators.required]],
      priority: ['', [Validators.required]]
    });
  }

  addTodo() {
    this.todoService.addTodo(this.formTodoAdd.value).subscribe((res) => {
      console.log(res);
      this.successSend = true;
      this.formTodoAdd.reset();
    });
  }

}
