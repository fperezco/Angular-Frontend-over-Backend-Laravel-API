import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from '../../services/video.service';
import { Video } from '../../interfaces/video.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-video-show',
  templateUrl: './video-show.component.html',
  styleUrls: ['./video-show.component.css']
})
export class VideoShowComponent implements OnInit {

  loading = false;
  video: Video = {};

  constructor(private activatedRoute: ActivatedRoute, private videoService: VideoService, private router: Router) {
    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      this.getVideo(params['id']);
    });
  }

  ngOnInit() {
  }

  getVideo(id: string){
    this.loading = true;
    this.videoService.getVideo(id)
      .subscribe(  (resp: any) => {
        this.video = resp.data;
        console.log('en compomente video:', this.video);
        this.loading = false;
      });
  }

  deleteVideo() {

    Swal.fire({
      title: 'Confirmación',
      text: `¿Esta seguro de borrar a ${this.video.name}?`,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true
    }).then(resp => {
        if (resp.value) {

            // invocamos el subscribe para que se dispare
            this.launchSweetUpdating();
            this.videoService.deleteVideo(this.video)
              .subscribe(  (resp: any) => {
                //this.video = resp.data; //pk delete no me esta devolviendo nada
                console.log('en compomente borrar video:', this.video);
                this.launchSweetDeleted(this.video.name);
                this.router.navigateByUrl('/videos');
              });



        }
    });

  }


  launchSweetUpdating() {
    Swal.fire({
      icon: 'info',
      title: 'Espere',
      text: 'Actualizando informacion',
      allowOutsideClick: false
    });
    Swal.showLoading();
  }

  launchSweetDeleted(name) {
    Swal.fire({
      icon: 'error',
      title: name,
      text: `Se eliminó correctamente ${name}`
    });
  }

}
