import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoSingleComponent } from './todo-single/todo-single.component';


const routes: Routes = [
  {
    path: '', component: TodoSingleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoSingleRoutingModule { }
