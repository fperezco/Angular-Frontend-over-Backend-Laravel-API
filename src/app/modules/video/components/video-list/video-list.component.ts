import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { Video } from '../../interfaces/video.interface';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  loading = true;
  videosDisponibles: Video[] = [];
  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.getAllVideos();

  }

  getAllVideos() {
    this.loading = true;
    this.videoService.getAllVideos()
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
    });
  }

}
