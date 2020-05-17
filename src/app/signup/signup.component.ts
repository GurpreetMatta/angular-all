import { AuthService } from './../_services/auth-service.service';
import { SignupRequest } from './../_models/signuprequest.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form;
  signup:SignupRequest=new SignupRequest();

  constructor(private fb:FormBuilder,private authService:AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
      email:[],
      name:[]
    });
  }

  onSubmit(){
    console.log(this.signup)
  }

}
