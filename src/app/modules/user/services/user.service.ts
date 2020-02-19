import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/User.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://127.0.0.1:8000/api/v1';

  constructor( private http: HttpClient) { }

  /*login(User: User) {
    console.log("Invocado login");
    return this.http.post(`${this.baseUrl}/login`, User)
    .pipe(
      map( (resp: any) => {
        return resp;
      })
    );
  }*/



  getAllUsers(): any {
      return this.http.get(`${this.baseUrl}/users`); 
  }

  /**
   * 
   * @param id del User en cuestion
   */
  getUser(id){
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }


  /*addUser(User: User) {
    console.log("Invocada la creacion de un User");
    return this.http.post(`${this.baseUrl}/Users`, User)
    .pipe(
      map( (resp: any) => {
        return resp;
      })
    );
  }*/


  /**
   * 
   * @param User User
   */
  updateUser(User: User){
    return this.http.put(`${this.baseUrl}/users/${User.id}`, User)
    .pipe(
      map( (resp: any) => {
        return resp;
      })
    );
  }

  deleteUser(User: User){
    return this.http.delete(`${this.baseUrl}/users/${User.id}`)
    .pipe(
      map( (resp: any) => {
        return resp;
      })
    );
  }

}
