import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from '../../services/video.service';
import { Video } from '../../interfaces/video.interface';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { noUndefined } from '@angular/compiler/src/util';


@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.css']
})
export class VideoEditComponent implements OnInit {
  loading = false;

  // EDIT POR COJONES NO TENDRA QUE TRAER NUNCA NUEVOS ATRIBUTOS SI VIENE DE SHOW,
  // ESO SEGURISIMO YA QUE SHOW MOSTRARÁ TODOS LOS ATRIBUTOS DEL OBJETO

  // en lugar de consumir el webservice por el id del video en la url lo traigo
  // como dato del compomente padre que ya lo tiene y no lo he de consumir dos veces
  @Input() video: Video;
  // lo uso para notificar al padre de vuelta al listado seteando el videoseleccionado a null
  @Output() messageEvent = new EventEmitter<string>();
  /**
   * Notificaciones al padre, en este caso al listado de recursos
   * @param cambio 
   */
  notifyEndEdition() {
    this.messageEvent.emit(null);
  }

  constructor(private activatedRoute: ActivatedRoute, private videoService: VideoService, private router: Router) {

    // añado la funcionalidad para venir de show a edit pasando el objeto entre rutas, para no tener
    // que consumir de nuevo el webservice aqui, ahora, si se refresca la url del edit, se pierde ese dato
    // por eso contemplo las dos opciones
    if ( noUndefined(this.router.getCurrentNavigation().extras.state)) {
        //si no esta undefined => viene el objecto por ruta
        console.log("editar, el objeto viene por ruta");
        this.video = history.state.data;
    }
    else {
      console.log("consumo el webservice en editar ya que NO VIENE POR RUTA");
      this.activatedRoute.params.subscribe( params => {
      console.log(params);
      this.getVideo(params['id']);
      });
    }
    
  }

  ngOnInit() {
    //this.video = history.state.data;
    //console.log("esto es el video on inig",this.video);
  }

  getVideo(id: string) {
    this.loading = true;
    this.videoService.getVideo(id)
      .subscribe(  (resp: any) => {
        this.video = resp.data;
        console.log('en compomente video edit:',this.video);
        this.loading = false;
      });
  }


  updateVideo(forma: NgForm) {
    console.log( 'ngForm' , forma);

    console.log('esto es lo que tengo ');
    console.log(forma.value);

    this.launchSweetUpdating();
    this.videoService.updateVideo(this.video)
      .subscribe(  (resp: any) => {
        this.video = resp.data;
        console.log('en compomente video actualizado:', this.video);
        this.launchSweetUpdated(this.video.name);
        //this.router.navigateByUrl('/videos');
        // vuelvo al show y paso el video modificado para no consumir webservice
        this.router.navigate(['/videos', this.video.id], {state: {data:this.video}}); 
      });


  }

  launchSweetUpdating() {
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
      text: 'Se actualizo correctamente'
    });
  }


}
