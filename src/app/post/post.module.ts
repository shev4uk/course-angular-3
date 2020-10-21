import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostSingleComponent } from './post-single/post-single.component';
import { ButtonModule } from '../shared/components/button/button.module';


@NgModule({
  declarations: [
    PostListComponent,
    PostSingleComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    ButtonModule
  ]
})
export class PostModule { }
