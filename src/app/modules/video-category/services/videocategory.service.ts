import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoCategory } from '../interfaces/videocategory.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoCategoryService {

  baseUrl = 'http://127.0.0.1:8000/api/v1';

  constructor( private http: HttpClient) { }

  getAllVideosCategories(): any {
    return this.http.get(`${this.baseUrl}/videocategories/`);
  }

  /**
   * 
   * @param id del video en cuestion
   */
  getVideoCategory(id){
    return this.http.get(`${this.baseUrl}/videocategories/${id}`);
  }


  addVideoCategory(video: VideoCategory) {
    return this.http.post(`${this.baseUrl}/videocategories`, video)
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
  updateVideoCategory(video: VideoCategory){
    return this.http.put(`${this.baseUrl}/videocategories/${video.id}`, video)
    .pipe(
      map( (resp: any) => {
        return resp;
      })
    );
  }

  deleteVideoCategory(video: VideoCategory) {
    return this.http.delete(`${this.baseUrl}/videocategories/${video.id}`)
    .pipe(
      map( (resp: any) => {
        return resp;
      })
    );
  }

}
