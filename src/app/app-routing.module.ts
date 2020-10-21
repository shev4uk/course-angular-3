import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthGuard } from './shared/guards/auth.guard';


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
  // {
  //   path: 'post', loadChildren: import('./post/post.module').then(m => m.PostModule)
  // },
  {
    path: 'post', loadChildren: './post/post.module#PostModule', data: { preload: true }, canActivate: [AuthGuard]
  },
  {
    path: '**', component: NotFoundComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
