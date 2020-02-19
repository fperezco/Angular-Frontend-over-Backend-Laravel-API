import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../../user/interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://127.0.0.1:8000/api/v1';

  constructor( private http: HttpClient) { }

  login(User: User) {
    console.log("Invocado login");
    return this.http.post(`${this.baseUrl}/login`, User)
    .pipe(
      map( (resp: any) => {
        return resp;
      })
    );
  }

  logout() {
    localStorage.removeItem('auth_token');
  }

  isLogged() {
    if ( localStorage.getItem('auth_token') !== null) {
        return true;
    } else { 
        return false;
    }    
  }

}
