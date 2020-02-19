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
    console.log("invoke logout");
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }

}
