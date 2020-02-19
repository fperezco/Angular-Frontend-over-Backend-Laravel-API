import { Component, OnInit } from '@angular/core';
import { Video } from '../../interfaces/video.interface';
import { VideoService } from '../../services/video.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-add',
  templateUrl: './video-add.component.html',
  styleUrls: ['./video-add.component.css']
})
export class VideoAddComponent implements OnInit {

  video: Video = {};
  constructor(private videoService: VideoService, private router:Router) { }

  ngOnInit() {
  }

  /**
   * Metodo addVideo, invocado desde el componente formulario hijo, envia el formuario por Output hacia este método del padre
   * @param forma NgForm
   */
  addVideo(forma: NgForm){
    console.log("invocado ADDvideo");
    if(forma.value){

  
      console.log( 'ngForm' , forma);
  
      console.log('esto es lo que tengo ');
      console.log(forma.value);
  
      this.launchSweetUpdating();
      //this.video.user_id = 3;     //OJOOOO AKI!!!!!!!!!!!! A ESTO!!!!!!!!!!
      //this.video.videocategory_id = 3;
  
      this.videoService.addVideo(this.video)
        .subscribe(  (resp: any) => {
          this.video = resp.data;
          console.log('en compomente video actualizado:', this.video);
          this.launchSweetUpdated(this.video.name);
          this.router.navigateByUrl('/videos');
        });
  
    }


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

  launchSweetUpdated(name){
    Swal.fire({
      icon: 'success',
      title: name,
      text: 'Se almacenó correctamente'
    });
  }


}
