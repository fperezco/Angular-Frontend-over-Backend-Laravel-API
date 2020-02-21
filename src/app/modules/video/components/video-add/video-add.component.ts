import { Component, OnInit } from '@angular/core';
import { Video } from '../../interfaces/video.interface';
import { VideoService } from '../../services/video.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SweetAlertsComponent } from 'src/app/modules/shared/components/sweet-alerts/sweet-alerts.component';

@Component({
  selector: 'app-video-add',
  templateUrl: './video-add.component.html',
  styleUrls: ['./video-add.component.css']
})
export class VideoAddComponent implements OnInit {

  video: Video = {};
  constructor(
    private videoService: VideoService,
    private router:Router,
    private sweetAlerts: SweetAlertsComponent) { }

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
  
      this.sweetAlerts.launchSweetUpdating();

      this.videoService.addVideo(this.video)
        .subscribe(  (resp: any) => {
          this.video = resp.data;
          console.log('en compomente video add:', this.video);
          this.sweetAlerts.launchSweetUpdated(this.video.name);
          this.router.navigateByUrl('/videos');
        },
        (error) => {
          console.log('Error en add ', error);
          this.sweetAlerts.launchSweetError('Add video error');
          this.router.navigateByUrl('/videos');
        });
    }
  }


}
