import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authbar',
  templateUrl: './authbar.component.html',
  styleUrls: ['./authbar.component.css']
})
export class AuthbarComponent{

  //userLogged: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }


  logout(){
    this.authService.logout()
    .then((response) => {
        console.log("logout correcto ", response);
        this.router.navigateByUrl("/login");
    })
    .catch((error) => {
        console.log("logout incorrecto", error);
    });
    


  }

}
