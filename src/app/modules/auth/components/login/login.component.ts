import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../user/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    console.log( 'datos del user antes del servicio' , this.user);
    this.authService.login(this.user)
      .subscribe(  (resp: any) => {
        console.log("login exitoso, viene token");
        console.log("respuesta", resp['token']);
        localStorage.setItem('auth_token', resp.token);
      }
      ,
      (error) => {
        console.log("Error  de logueo ",error);
      });
  }

}
