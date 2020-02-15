import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { SharedModule } from './modules/shared/shared.module';
import { VideoModule } from './modules/video/video.module';
import { VideoCategoryModule } from './modules/video-category/video-category.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    VideoModule,
    VideoCategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
