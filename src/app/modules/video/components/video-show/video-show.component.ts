import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() video: Video; //en lugar de consumir el webservice por el id del video en la url lo traigo como dato del compomente padre que ya lo tiene y no lo he de consumir dos veces
  
  @Output() messageEvent = new EventEmitter<string>(); //lo uso para notificar al padre de vuelta al listado seteando el videoseleccionado a null
  
  visibleEditForm = false;

  showEditForm() {
    this.visibleEditForm = true;
  }

  hideEditForm() {
    this.visibleEditForm = false;
  }

  /**
   * MENSAJES DESDE EL HIJO
   * Mensajes enviados desde el formulario de edicion, simplemente me dice que ha terminado, con cancelar o 
   * editar pero me notifica para que lo esconda
   * @param event 
   */
  receiveMessageFromEditForm(event){
    console.log("recibido de la edicion ", event);
    this.hideEditForm();
  }

  /**
   * MENSAJES HACIA EL PADRE
   * Notificaciones al padre, en este caso al listado de recursos
   * @param cambio 
   */
  notificarCambioVideoSeleccionado(cambio) {
    this.messageEvent.emit(cambio);
  }

  loading = false; //por compatiblidad con el template
  //video: Video = {};

  constructor(private videoService: VideoService, private router: Router) {
    /*this.activatedRoute.params.subscribe( params => {
      console.log(params);
      this.getVideo(params['id']);
    });*/
  }

  ngOnInit() {
  }


 /* getVideo(id: string){
    this.loading = true;
    this.videoService.getVideo(id)
      .subscribe(  (resp: any) => {
        this.video = resp.data;
        console.log('en compomente video:', this.video);
        this.loading = false;
      });
  }*/

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
                //this.router.navigateByUrl('/videos');
                this.notificarCambioVideoSeleccionado('deleted');
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
