import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../../../interfaces/video.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-videoform',
  templateUrl: './videoform.component.html',
  styleUrls: ['./videoform.component.css']
})
export class VideoformComponent implements OnInit {

  @Input() modelo: any;
  @Input() nbrBoton: any;


  @Output() childSubmit = new EventEmitter<any>();

  /**
   * Metodo invocado en el submit del formulario, recibe el contenido del formulario y lo emite hacia el padre
   * hacia el metodo indicado por el padre en el parametro childSubmit
   * @param forma 
   */
  childFormSubmit(forma: NgForm) {
    console.log('Child Form Submit');
    this.childSubmit.emit(forma);
  }

  constructor() { }
  ngOnInit() {
  }

}
