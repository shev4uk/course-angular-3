import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormTemplateComponent } from './form-template/form-template.component';

@NgModule({
  declarations: [
    AppComponent,
    FormReactiveComponent,
    FormTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
