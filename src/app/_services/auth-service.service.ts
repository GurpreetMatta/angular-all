import { UserModel } from './../_models/user.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { JwtHelper } from 'angular2-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post<UserModel>(`${environment.apiEndpoint}/api/auth/login`, credentials)
    .pipe(map(result => {
      const user: UserModel = result;
      console.log(user);
      
      console.log(' user :', user)
      if (user.accessToken) {
        localStorage.setItem('token', result.accessToken);
        localStorage.setItem('user', JSON.stringify(result));
        return true;
      }
      return false;
    }), catchError(this.errorHandler));

  }

  errorHandler(error: Response) {
    if (error.status === 401) {
      return throwError('unauthorized');
    }
    return throwError('server error.');

  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isLoggedIn(){
    let jwt= new JwtHelper();
    let token = localStorage.getItem('token');
    if(token){
      return jwt.isTokenExpired(token);
    }
    return false;
  }

}
