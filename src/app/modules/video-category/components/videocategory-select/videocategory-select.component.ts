import { Component, OnInit, Input, Output, EventEmitter,forwardRef } from '@angular/core';
import { VideoCategory } from '../../interfaces/videocategory.interface';
import { VideoCategoryService } from '../../services/videocategory.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-videocategory-select',
  templateUrl: './videocategory-select.component.html',
  styleUrls: ['./videocategory-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VideocategorySelectComponent),
      multi: true
    }
  ]
})

export class VideocategorySelectComponent implements  OnInit  , ControlValueAccessor {

  value: string;
  isDisabled: boolean;
  onChange = (_:any) => { }
  onTouch = () => { }

  onInput(value: string) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }  
  
  writeValue(value: any): void {
    if (value) {
      this.value = value || '';
    } else {
      this.value = '';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }


  @Input() clase;
  videoCategories: VideoCategory[] = [];

  constructor(private videoCategoryService: VideoCategoryService) { 

  }

  ngOnInit() {
    console.log("viene como model", this.value);
    this.getAllVideos();
  }

  getAllVideos() {
    console.log("obteniendo listado de videos");
    this.videoCategoryService.getAllVideosCategories()
    .subscribe ( resp => {
      console.log(resp.data);
      for (const res of resp.data) {
          const video: VideoCategory = {};
          video.id = res.id;
          video.name = res.name;
          this.videoCategories.push(video);
      }

      console.log('los videos son');
      console.log(this.videoCategories);
    });
  }
}
