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

  logoutCall() {
    return this.http.post(`${this.baseUrl}/logout`, {})
    .pipe(
      map( (resp: any) => {
        return resp;
      })
    );
  }

  logout2(): any {
    this.logoutCall()
    .subscribe( (resp:any) => {
      console.log("logout OK");
      console.log(resp);
      localStorage.removeItem('auth_token');
      return true;
    },
    (error) => {
      console.log("logout error", error);
      return error;
    });
  }

  removeToken(){
    localStorage.removeItem('auth_token');
  }

 /* logout(){
    return new Promise( function(resolve,reject){

      this.http.post(`${this.baseUrl}/logout`, {})
      .subscribe( (resp:any) => {
        console.log("logout OK");
        console.log(resp);
        localStorage.removeItem('auth_token');
        resolve("logout ok");
      },
      (error) => {
        console.log("logout error", error);
        reject(error);
      });

  });*/

  async logout() {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.baseUrl}/logout`, {})
            .toPromise()
            .then(
                res => {
                    localStorage.removeItem('auth_token');
                    resolve(res);
                },
                msg => {
                    reject(msg);
                }
            );
    });

  }


  isLogged() {
    if ( localStorage.getItem('auth_token') !== null) {
        return true;
    } else { 
        return false;
    }    
  }

}
