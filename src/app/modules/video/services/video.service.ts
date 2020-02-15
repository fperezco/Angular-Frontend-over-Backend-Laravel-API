import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../interfaces/video.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  baseUrl = 'http://127.0.0.1:8000/api/v1';

  constructor( private http: HttpClient) { }

  getAllVideos(): any {
    return this.http.get(`${this.baseUrl}/videos/`);
  }

  getAllVideosByVideoCategory(videoCategoryId){
    return this.http.get(`${this.baseUrl}/videos?videocategory_id=${videoCategoryId}`);
  }

  /**
   * 
   * @param id del video en cuestion
   */
  getVideo(id){
    return this.http.get(`${this.baseUrl}/videos/${id}`);
  }


  addVideo(video: Video){
    return this.http.post(`${this.baseUrl}/videos`, video)
    .pipe(
      map( (resp: any) => {
        return resp;
      })
    );
  }


  /**
   * 
   * @param video Video
   */
  updateVideo(video: Video){
    return this.http.put(`${this.baseUrl}/videos/${video.id}`, video)
    .pipe(
      map( (resp: any) => {
        return resp;
      })
    );
  }

  deleteVideo(video: Video){
    return this.http.delete(`${this.baseUrl}/videos/${video.id}`)
    .pipe(
      map( (resp: any) => {
        return resp;
      })
    );
  }

}
