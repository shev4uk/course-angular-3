import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostSingleComponent } from './post/post-single/post-single.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'auth', component: AuthComponent, children: [
      {
        path: 'signin', component: SignInComponent
      },
      {
        path: 'signup', component: SignUpComponent
      }
    ]
  },
  {
    path: 'post', component: PostListComponent
  },
  {
    path: 'post/:id', component: PostSingleComponent
  },
  {
    path: '**', component: NotFoundComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
