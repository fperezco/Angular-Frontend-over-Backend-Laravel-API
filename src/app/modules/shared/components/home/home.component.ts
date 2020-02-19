import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  texto: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
     this.getAbout();
  }

  getAbout(){
    this.sharedService.getAbout()
    .subscribe ( resp => {
      console.log(resp);
      this.texto = resp;
    });
  }

}
