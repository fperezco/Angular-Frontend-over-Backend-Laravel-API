import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { VideoCategory } from '../../interfaces/videocategory.interface';
import { VideoCategoryService } from '../../services/videocategory.service';
import { NgForm, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-videocategory-select',
  templateUrl: './videocategory-select.component.html',
  styleUrls: ['./videocategory-select.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: VideocategorySelectComponent
  }]
})



export class VideocategorySelectComponent implements ControlValueAccessor, OnInit {

  @ViewChild('select') input: ElementRef;
  
  // puede venir del componente padre el elto seleccionado
  @Input() videoCategorySelectedId;
  @Input() model;
  @Input() nameForm;
  @Input() idForm;
  videoCategories: VideoCategory[] = [];

  
  constructor(private videoCategoryService: VideoCategoryService) { 

  }

  ngOnInit() {
    console.log("viene como preseleccionada la categoria", this.videoCategorySelectedId);
    console.log("viene como model", this.model);
    console.log("viene como name", this.nameForm);
    console.log("viene como id", this.idForm);
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

  // metodos obligados a implementar por la interfaz

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  onChange(event) { }

  onTouched() { }

}
