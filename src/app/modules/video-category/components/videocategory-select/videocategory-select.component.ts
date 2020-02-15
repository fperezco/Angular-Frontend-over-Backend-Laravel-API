import { Component, OnInit, Input } from '@angular/core';
import { VideoCategory } from '../../interfaces/videocategory.interface';
import { VideoCategoryService } from '../../services/videocategory.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-videocategory-select',
  templateUrl: './videocategory-select.component.html',
  styleUrls: ['./videocategory-select.component.css']
})
export class VideocategorySelectComponent implements OnInit {

  // puede venir del componente padre el elto seleccionado
  @Input() videoCategorySelectedId;
  videoCategories: VideoCategory[] = [];
  constructor(private videoCategoryService: VideoCategoryService) { }

  ngOnInit() {
    console.log("viene como preseleccionada la categoria", this.videoCategorySelectedId);
    this.getAllVideos();

  }

  getAllVideos() {
    console.log("obteniendo listado de videos");
    this.videoCategoryService.getAllVideosCategories()
    .subscribe ( resp => {
      console.log(resp.data);
      for (const res of resp.data) {
          const video: VideoCategory = {};
          video.id = res.id;
          video.name = res.name;
          this.videoCategories.push(video);
      }

      console.log('los videos son');
      console.log(this.videoCategories);
    });
  }
}
