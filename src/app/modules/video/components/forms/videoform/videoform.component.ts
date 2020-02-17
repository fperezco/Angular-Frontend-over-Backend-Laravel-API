import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../../interfaces/video.interface';

@Component({
  selector: 'app-videoform',
  templateUrl: './videoform.component.html',
  styleUrls: ['./videoform.component.css']
})
export class VideoformComponent implements OnInit {

  @Input() video: Video = {};
  
  constructor() { }

  ngOnInit() {
  }

}
