import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  id: number;
  formTodoEdit: FormGroup;
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
    return this.formTodoEdit.controls;
  }

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getTaskById(this.id);
    this.buildForm();
  }

  getTaskById(id: number) {
    this.todoService.getTodoSingle(id).subscribe((todo) => {
      this.formTodoEdit.patchValue({
        name: todo.name,
        description: todo.description,
        endDate: todo.endDate,
        priority: todo.priority
      });
    });
  }

  buildForm() {
    this.formTodoEdit = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(300)]],
      endDate: ['', [Validators.required]],
      priority: ['', [Validators.required]]
    });
  }

  editTodo() {
    this.todoService.editTodo(this.formTodoEdit.value, this.id).subscribe((todo) => {
      this.successSend = true;
      setTimeout(() => {
        this.router.navigate(['/todo', this.id]);
      }, 1000);
    });
  }

}
