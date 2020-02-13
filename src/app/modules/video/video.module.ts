import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoAddComponent } from './components/video-add/video-add.component';
import { VideoShowComponent } from './components/video-show/video-show.component';
import { VideoEditComponent } from './components/video-edit/video-edit.component';
import { VideoRoutingModule } from './video-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [VideoListComponent, VideoAddComponent, VideoShowComponent, VideoEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    VideoRoutingModule
  ]
})
export class VideoModule { }
