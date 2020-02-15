import { Component, OnInit } from '@angular/core';
import { VideoCategory } from '../../interfaces/videocategory.interface';
import { VideoCategoryService } from '../../services/videocategory.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videocategory-list',
  templateUrl: './videocategory-list.component.html',
  styleUrls: ['./videocategory-list.component.css']
})
export class VideocategoryListComponent implements OnInit {

  loading = true;
  videosDisponibles: VideoCategory[] = [];
  constructor(private videoCategoryService: VideoCategoryService, private router: Router) { }

  ngOnInit() {
    this.getAllVideos();

  }

  getAllVideos() {
    console.log("obteniendo listado de videos");
    this.loading = true;
    this.videoCategoryService.getAllVideosCategories()
    .subscribe ( resp => {
      console.log(resp.data);
      for (const res of resp.data) {
          const video: VideoCategory = {};
          video.id = res.id;
          video.name = res.name;
          this.videosDisponibles.push(video);
      }
      this.loading = false;
      console.log('los videos son');
      console.log(this.videosDisponibles);
    });
  }



  deleteVideoCategory(videoCategory: VideoCategory) {

    console.log("en borrar videocategory", videoCategory);
    Swal.fire({
      title: 'Confirmación',
      text: `¿Esta seguro de borrar a ${videoCategory.name}?`,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true
    }).then(resp => {
        if (resp.value) {

            // invocamos el subscribe para que se dispare
            this.launchSweetUpdating();
            this.videoCategoryService.deleteVideoCategory(videoCategory)
              .subscribe(  (resp: any) => {
                console.log('en compomente borrar video:', videoCategory);
                this.launchSweetDeleted(videoCategory.name);
                this.videosDisponibles = [];
                this.getAllVideos();
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
