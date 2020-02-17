import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoAddComponent } from './components/video-add/video-add.component';
import { VideoShowComponent } from './components/video-show/video-show.component';
import { VideoEditComponent } from './components/video-edit/video-edit.component';
import { VideoRoutingModule } from './video-routing.module';
import { FormsModule } from '@angular/forms';
import { VideoCategoryModule } from '../video-category/video-category.module';
import { VideoformComponent } from './components/forms/videoform/videoform.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [VideoListComponent, VideoAddComponent, VideoShowComponent, VideoEditComponent, VideoformComponent],
  imports: [
    CommonModule,
    FormsModule,
    VideoRoutingModule,
    VideoCategoryModule, //para usar el videocategoryselectcomponent en video add y video edit,
    SharedModule //para usar el componente loader
  ]
})
export class VideoModule { }
