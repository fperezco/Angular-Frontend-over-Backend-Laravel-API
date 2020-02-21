import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { Video } from '../../interfaces/video.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoCategory } from '../../../video-category/interfaces/videocategory.interface';
import { VideoCategoryService } from '../../../video-category/services/videocategory.service';
import { SweetAlertsComponent } from 'src/app/modules/shared/components/sweet-alerts/sweet-alerts.component';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  loading = true;
  videosDisponibles: Video[] = [];
  selectedVideo: Video = null;
  videoCategoryId = null;

  constructor(
    private videoService: VideoService,
    private activatedRoute: ActivatedRoute,
    private sweetAlerts: SweetAlertsComponent,
    private router: Router) { 
      this.videoCategoryId = this.activatedRoute.snapshot.queryParamMap.get("videocategory_id");
      console.log('la categoria del video es:' ,this.videoCategoryId);
      this.getAllVideos(this.videoCategoryId);
  }

  ngOnInit() {
  }

  getAllVideos(videoCategoryId) {
    this.loading = true;
    this.videoService.getAllVideos(videoCategoryId)
    .subscribe ( resp => {
      console.log(resp.data);
      for (const res of resp.data) {
          const video: Video = {};
          video.id = res.id;
          video.name = res.name;
          video.url = res.url;
          video.picture = res.picture;
          video.description = res.description;
          this.videosDisponibles.push(video);
      }
      this.loading = false;
      console.log('los videos son');
      console.log(this.videosDisponibles);
    },
    ( error ) => {
      console.log('Error on list ', error);
      this.sweetAlerts.launchSweetError('List video error');
      this.router.navigateByUrl('home');
    });
  }

  /**
   * Al hacer click en un video seteo como seleccionado el video en cuestion y muestro los detalles
   * @param video 
   */
  clickOnVideo(video: Video) {
    console.log("seteo el seleccionado a video:",video);
    this.selectedVideo = video;
  }

  /**
   * NO ME GUSTA NADA ESTE METODO QUE SIRVE PARA NOTIFICA REL BORRADO AL PADRE Y PARA DESSELECCIONAR EL VIDEO... TU SABE...
   * Recibo los eventos de los hijos, en este caso del show que al pinchar en back setea a nulo el video seleccionado, disparando de nuevo 
   * que aparezaca el listado de videos sin consumir el webservice
   * @param $event 
   */
  receiveMessage(event) {
    console.log("cambio en video seleccionado, puede que hayamos pinchado back o venga deleted, event = ", event);
    // si del show me notifican que he borrado el video => lo quito del array de memoria
    if(event == "deleted"){
      console.log("borramos el video");
      this.videosDisponibles.splice(this.videosDisponibles.indexOf(this.selectedVideo), 1);
    }
    // sea como fuere, terminaron las operaciones en el show => lo escondo y muestro el listado
    this.selectedVideo = null;
    
  }

}
