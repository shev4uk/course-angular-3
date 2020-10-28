import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoSingleRoutingModule } from './todo-single-routing.module';
import { TodoSingleComponent } from './todo-single/todo-single.component';
import { TodoAddComponent } from './todo-add/todo-add.component';


@NgModule({
  declarations: [TodoSingleComponent, TodoAddComponent],
  imports: [
    CommonModule,
    TodoSingleRoutingModule
  ]
})
export class TodoSingleModule { }
