import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from '../../services/video.service';
import { Video } from '../../interfaces/video.interface';
import Swal from 'sweetalert2';
import { noUndefined } from '@angular/compiler/src/util';
import { SweetAlertsComponent } from '../../../shared/components/sweet-alerts/sweet-alerts.component';

@Component({
  selector: 'app-video-show',
  templateUrl: './video-show.component.html',
  styleUrls: ['./video-show.component.css']
})
export class VideoShowComponent implements OnInit {

  loading = false;
  video: Video = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private videoService: VideoService,
    private router: Router,
    private sweetAlerts: SweetAlertsComponent) {
  }

  ngOnInit() {
      console.log('consumo el webservice en show ya que NO VIENE POR RUTA');
      this.activatedRoute.params.subscribe( params => {
        console.log(params);
        this.getVideo(params['id']);
      });
  }

  getVideo(id: string){
    this.loading = true;
    this.videoService.getVideo(id)
      .subscribe(  (resp: any) => {
        this.video = resp.data;
        console.log('en compomente video:', this.video);
        this.loading = false;
      },
      (error) => {
        console.log('Error en show ',error);
        this.sweetAlerts.launchSweetError("Error obteniendo video");
        this.router.navigateByUrl('/videos');
      });
  }

  deleteVideo() {
    this.sweetAlerts.launchSweetYesNo('Confirmación', `¿Esta seguro de borrar a ${this.video.name}?`)
    .then(resp => {
        if (resp.value) {
          // invocamos el subscribe para que se dispare
          this.sweetAlerts.launchSweetUpdating();
          this.videoService.deleteVideo(this.video)
            .subscribe(  (resp: any) => {
              // this.video = resp.data; //pk delete no me esta devolviendo nada
              console.log('en compomente borrar video:', this.video);
              this.sweetAlerts.launchSweetDeleted(this.video.name);
              this.router.navigateByUrl('/videos');
            },
            (error) => {
              console.log('Error en delete ',error);
              this.sweetAlerts.launchSweetError("Delete video error");
              this.router.navigateByUrl('/videos');
            });
        }
    });
  }
}
