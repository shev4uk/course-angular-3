import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoEditRoutingModule } from './todo-edit-routing.module';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatSelectModule } from '@angular/material';


@NgModule({
  declarations: [TodoEditComponent],
  imports: [
    CommonModule,
    TodoEditRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class TodoEditModule { }
