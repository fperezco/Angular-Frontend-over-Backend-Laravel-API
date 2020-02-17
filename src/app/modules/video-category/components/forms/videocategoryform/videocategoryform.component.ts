import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-videocategoryform',
  templateUrl: './videocategoryform.component.html',
  styleUrls: ['./videocategoryform.component.css']
})
export class VideocategoryformComponent implements OnInit {

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
