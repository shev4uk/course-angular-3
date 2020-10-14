import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormPostComponent } from './form-post/form-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewCatalogComponent } from './view-catalog/view-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPostComponent,
    ViewCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
