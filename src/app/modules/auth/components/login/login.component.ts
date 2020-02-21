import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../user/interfaces/user.interface';
import { Router } from '@angular/router';
import { SweetAlertsComponent } from '../../../shared/components/sweet-alerts/sweet-alerts.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {};
  constructor(
    private authService: AuthService,
    private router: Router,
    private sweetAlerts: SweetAlertsComponent) { }

  ngOnInit() {
  }

  login() {
    console.log( 'datos del user antes del servicio' , this.user);
    this.authService.login(this.user)
      .subscribe(  (resp: any) => {
        console.log('login exitoso, viene token');
        console.log('respuesta', resp['token']);
        localStorage.setItem('auth_token', resp.token);
        this.router.navigateByUrl('home');
      }
      ,
      (error) => {
        console.log('Error on login ', error);
        this.sweetAlerts.launchSweetError(error);
      });
  }

}
