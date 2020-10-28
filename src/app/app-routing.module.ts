import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'todo', loadChildren: './todo-list/todo-list.module#TodoListModule'
  },
  {
    path: 'todo/add', loadChildren: './todo-add/todo-add.module#TodoAddModule'
  },
  {
    path: 'todo/:id', loadChildren: './todo-single/todo-single.module#TodoSingleModule'
  },
  {
    path: '', redirectTo: '/todo', pathMatch: 'full'
  },
  {
    path: '**', loadChildren: './not-found/not-found.module#NotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
