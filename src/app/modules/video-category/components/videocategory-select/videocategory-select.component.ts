import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VideoCategory } from '../../interfaces/videocategory.interface';
import { VideoCategoryService } from '../../services/videocategory.service';

@Component({
  selector: 'app-videocategory-select',
  templateUrl: './videocategory-select.component.html',
  styleUrls: ['./videocategory-select.component.css']
})



export class VideocategorySelectComponent implements  OnInit {


  // puede venir del componente padre el elto seleccionado
  @Input() model;
  videoCategories: VideoCategory[] = [];

      // note that this must be named as the input name + "Change"
      @Output() modelChange: any = new EventEmitter();

      updateData(event) {
        this.model = event;
        this.modelChange.emit(event);
        console.log("en hijo, model change",event);
      }

  
  constructor(private videoCategoryService: VideoCategoryService) { 

  }

  ngOnInit() {
    console.log("viene como model", this.model);
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
