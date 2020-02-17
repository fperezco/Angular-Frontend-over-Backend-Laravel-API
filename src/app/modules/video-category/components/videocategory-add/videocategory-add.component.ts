import { Component, OnInit } from '@angular/core';
import { VideoCategory } from '../../interfaces/videocategory.interface';
import { VideoCategoryService } from '../../services/videocategory.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-videocategory-add',
  templateUrl: './videocategory-add.component.html',
  styleUrls: ['./videocategory-add.component.css']
})
export class VideocategoryAddComponent implements OnInit {


  videoCategory: VideoCategory = {};
  constructor(private videoService: VideoCategoryService, private router:Router) { }

  ngOnInit() {
  }

  /**
   * Metodo addVideo, invocado desde el componente formulario hijo, envia el formuario por Output hacia este método del padre
   * @param forma NgForm
   */
  addVideoCategory(forma: NgForm){
      console.log( 'ngForm' , forma);
      console.log('esto es lo que tengo ');
      console.log(forma.value);
  
      this.launchSweetUpdating();
      this.videoCategory.user_id = 3;     //OJOOOO AKI!!!!!!!!!!!! A ESTO!!!!!!!!!!
  
      this.videoService.addVideoCategory(this.videoCategory)
        .subscribe(  (resp: any) => {
          this.videoCategory = resp.data;
          console.log('en compomente video actualizado:', this.videoCategory);
          this.launchSweetUpdated(this.videoCategory.name);
          this.router.navigateByUrl('/videocategories');
        });
  }

  launchSweetUpdating(){
    Swal.fire({
      icon: 'info',
      title: 'Espere',
      text: 'Guardando informacion',
      allowOutsideClick: false
    });

    Swal.showLoading();
  }

  launchSweetUpdated(name) {
    Swal.fire({
      icon: 'success',
      title: name,
      text: 'Se almacenó correctamente'
    });
  }
}

