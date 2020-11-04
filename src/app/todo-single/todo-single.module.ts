import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoSingleRoutingModule } from './todo-single-routing.module';
import { TodoSingleComponent } from './todo-single/todo-single.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogDeleteTodoModule } from '../shared/components/dialog-delete-todo/dialog-delete-todo.module';
import { MatDialogModule } from '@angular/material';


@NgModule({
  declarations: [TodoSingleComponent],
  imports: [
    CommonModule,
    TodoSingleRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    DialogDeleteTodoModule
  ]
})
export class TodoSingleModule { }
