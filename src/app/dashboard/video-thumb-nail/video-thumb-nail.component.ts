import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../app-types';

@Component({
  selector: 'app-video-thumb-nail',
  templateUrl: './video-thumb-nail.component.html',
  styleUrls: ['./video-thumb-nail.component.scss']
})
export class VideoThumbNailComponent implements OnInit {
  @Input() video: Video | undefined;
  @Input() selectedVideo: string | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
