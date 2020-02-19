import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoShowComponent } from './components/video-show/video-show.component';
import { VideoEditComponent } from './components/video-edit/video-edit.component';
import { VideoAddComponent } from './components/video-add/video-add.component';
import { AuthGuard } from '../../helpers/auth.guard';

const videoRoutes: Routes = [
  { path: 'videos',  component: VideoListComponent,  canActivate: [AuthGuard]},
  { path: 'videos/new',  component: VideoAddComponent , canActivate: [AuthGuard]},
  { path: 'videos/:id',  component: VideoShowComponent , canActivate: [AuthGuard]},
  { path: 'videos/:id/edit',  component: VideoEditComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [
    RouterModule.forChild(videoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VideoRoutingModule { }
