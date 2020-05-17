import { PostsRequest } from './../_models/postsrequest.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {

  form;
  posts:PostsRequest = new PostsRequest();

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title:[],
      description:[]
    })
  }

  onSubmit(){
    
  }

}
