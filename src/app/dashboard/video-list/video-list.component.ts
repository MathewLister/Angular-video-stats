import { Component, Input } from '@angular/core';
import { Video } from '../app-types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent {
  selectedVideo: string | undefined;
  @Input() videos: Video[] | undefined;
  
  constructor() { }

  selectVideo(id: string): void {
    this.selectedVideo = id;
  }
}
