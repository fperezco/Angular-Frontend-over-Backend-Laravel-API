import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, NgControl } from '@angular/forms';
import { LoginRoutingModule } from './auth-routing.module';
import { AuthbarComponent } from './components/authbar/authbar.component';



@NgModule({
  declarations: [LoginComponent, AuthbarComponent],
  imports: [
    CommonModule, FormsModule, LoginRoutingModule
  ],
  exports:[AuthbarComponent]
})
export class AuthModule { }
