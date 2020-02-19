import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideocategoryListComponent } from './components/videocategory-list/videocategory-list.component';
import { VideocategoryAddComponent } from './components/videocategory-add/videocategory-add.component';
import { VideocategoryShowComponent } from './components/videocategory-show/videocategory-show.component';
import { VideocategoryEditComponent } from './components/videocategory-edit/videocategory-edit.component';
import { AuthGuard } from '../../helpers/auth.guard';

const videoCategoryRoutes: Routes = [
  { path: 'videocategories',  component: VideocategoryListComponent , canActivate: [AuthGuard]},
  { path: 'videocategories/new',  component: VideocategoryAddComponent, canActivate: [AuthGuard] },
  { path: 'videocategories/:id',  component: VideocategoryShowComponent, canActivate: [AuthGuard] },
  { path: 'videocategories/:id/edit',  component: VideocategoryEditComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [
    RouterModule.forChild(videoCategoryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VideoCategoryRoutingModule { }
