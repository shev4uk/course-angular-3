import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [TodoListComponent, TodoItemComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class TodoListModule { }
