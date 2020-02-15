import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from '../../services/video.service';
import { Video } from '../../interfaces/video.interface';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.css']
})
export class VideoEditComponent implements OnInit {
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
        this.router.navigateByUrl('/videos');
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
