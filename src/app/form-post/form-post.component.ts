import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})
export class FormPostComponent implements OnInit {

  formAddPost: FormGroup;

  constructor(
    private fb: FormBuilder,
    private data: DataService
  ) { }

  ngOnInit() {
    this.formAddPost = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  addPost() {
    // console.log(this.formAddPost.value);
    // this.data.addPost(this.formAddPost.value).subscribe((res) => {
    //   console.log(res);
    // });
    this.data.addPost(this.formAddPost.value);
  }

}
