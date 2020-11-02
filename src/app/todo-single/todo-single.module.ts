import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoSingleRoutingModule } from './todo-single-routing.module';
import { TodoSingleComponent } from './todo-single/todo-single.component';
import { TodoAddComponent } from './todo-add/todo-add.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [TodoSingleComponent, TodoAddComponent],
  imports: [
    CommonModule,
    TodoSingleRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class TodoSingleModule { }
