import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoSingleComponent } from './todo-single/todo-single.component';


const routes: Routes = [
  {
    path: 'add', component: TodoAddComponent
  },
  {
    path: '', component: TodoSingleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoSingleRoutingModule { }
