import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideocategoryAddComponent } from './components/videocategory-add/videocategory-add.component';
import { VideocategoryEditComponent } from './components/videocategory-edit/videocategory-edit.component';
import { VideocategoryListComponent } from './components/videocategory-list/videocategory-list.component';
import { VideocategoryShowComponent } from './components/videocategory-show/videocategory-show.component';
import { FormsModule } from '@angular/forms';
import { VideoCategoryRoutingModule } from './videocategory-routing.module';
import { VideocategorySelectComponent } from './components/videocategory-select/videocategory-select.component';
import { VideocategorySelectCVLComponent } from './components/videocategory-select-cvl/videocategory-select-cvl.component';




@NgModule({
  declarations: [VideocategoryAddComponent, VideocategoryEditComponent, VideocategoryListComponent, VideocategoryShowComponent, VideocategorySelectComponent, VideocategorySelectCVLComponent],
  imports: [
    CommonModule,
    FormsModule,
    VideoCategoryRoutingModule
  ],
  exports: [VideocategorySelectComponent,VideocategorySelectCVLComponent] //lo exporto para usarlo en video add

})
export class VideoCategoryModule { }
