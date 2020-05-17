import { AuthService } from './../_services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  navLinks;
  isLoggedIn;
  constructor(private authService:AuthService) {
    
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.navLinks = [
      {
          label: 'Login',
          path: 'login',
          index: 0,
          show:!this.isLoggedIn
      }, 
      {
          label: 'Signup',
          path: 'signup',
          index: 1,
          show:!this.isLoggedIn
      },
      {
          label: 'Posts',
          path: 'posts',
          index: 2,
          show:this.isLoggedIn
      }, 
      {
          label: 'logout',
          path: 'logout',
          index: 3,
          show:this.isLoggedIn
      }, 
  ];
  }

}
