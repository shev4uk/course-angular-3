import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogDeleteTodoModule } from '../shared/components/dialog-delete-todo/dialog-delete-todo.module';
import { MatFormFieldModule, MatInputModule, MatProgressBarModule, MatRadioModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [TodoListComponent, TodoItemComponent],
  imports: [
    CommonModule,
    MatInputModule,
    TodoListRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    DialogDeleteTodoModule,
    MatProgressBarModule,
    MatFormFieldModule,
    FormsModule,
    MatRadioModule,
    InfiniteScrollModule
  ]
})
export class TodoListModule { }
