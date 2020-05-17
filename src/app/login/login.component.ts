import { AuthService } from './../_services/auth-service.service';
import { LoginRequest } from './../_models/loginrequest.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
  isLogin=false;
  login: LoginRequest = new LoginRequest();

  constructor(private fb: FormBuilder, 
              private authService: AuthService,
              private router:Router,
              private flashMessage:FlashMessagesService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log(this.login);
      this.authService.login(this.login).subscribe(
        result => {
            if(result){
              this.flashMessage.show(`Welcome ${this.login.username}`, { cssClass: 'alert-success', timeout: 10000 });
              this.router.navigate['/'];
            }
            else{
              this.isLogin=true;
            }
        },error =>{
          this.isLogin=true;
        }
    );

  }
}
