import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Video } from '../app-types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent {
  @Input() selectedVideo: string | undefined;
  @Input() videos: Video[] | undefined;
  @Output() videoSelected = new EventEmitter<string>();
  
  constructor() { }

  selectVideo(id: string): void {
    this.videoSelected.emit(id);
  }
}
