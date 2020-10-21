import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formContact: FormGroup;

  value = 'test';

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formContact = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
      check: [true]
    });
  }

  sendContact() {

  }

}
