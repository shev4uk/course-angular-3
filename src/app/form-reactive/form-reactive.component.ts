import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {

  themes = ['dark', 'light'];
  typeUser = ['freelance', 'full time'];

  formSetting: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formSetting = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.email]],
      theme: ['dark'],
      type: ['freelance'],
      agree: ['', Validators.required]
    });
  }

  sendForm() {
    console.log(this.formSetting.value);
  }

  setValue() {
    this.formSetting.patchValue({
      name: 'testfdv',
      email: 'test@gmail.com',
      theme: 'light',
      agree: false
    });
  }

  changeTheme() {
    console.log(this.formSetting.get('theme').value);
    console.log(this.formSetting.controls.theme.value);
  }

  get form() {
    return this.formSetting.controls;
  }

}
