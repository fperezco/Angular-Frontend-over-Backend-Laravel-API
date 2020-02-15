import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { Video } from '../../interfaces/video.interface';
import { ActivatedRoute } from '@angular/router';
import { VideoCategory } from '../../../video-category/interfaces/videocategory.interface';
import { VideoCategoryService } from '../../../video-category/services/videocategory.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  loading = true;
  videosDisponibles: Video[] = [];
  VideoCategory: VideoCategory = {};

  constructor(private videoService: VideoService, private activatedRoute: ActivatedRoute, private VideoCategoryService: VideoCategoryService) { 
    /*let videoCategoryId = this.activatedRoute.snapshot.queryParamMap.get("videocategory_id");
    console.log('la categoria del video es:' ,videoCategoryId);
    //obtengo dicha categoria
    this.VideoCategory = this.VideoCategoryService.getVideoCategoryb
*/

    this.getAllVideos();
  }

  ngOnInit() {
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
