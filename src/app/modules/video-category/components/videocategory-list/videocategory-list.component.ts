import { Component, OnInit } from '@angular/core';
import { VideoCategory } from '../../interfaces/videocategory.interface';
import { VideoCategoryService } from '../../services/videocategory.service';

@Component({
  selector: 'app-videocategory-list',
  templateUrl: './videocategory-list.component.html',
  styleUrls: ['./videocategory-list.component.css']
})
export class VideocategoryListComponent implements OnInit {

  loading = true;
  videosDisponibles: VideoCategory[] = [];
  constructor(private videoCategoryService: VideoCategoryService) { }

  ngOnInit() {
    this.getAllVideos();

  }

  getAllVideos() {
    this.loading = true;
    this.videoCategoryService.getAllVideos()
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

}
