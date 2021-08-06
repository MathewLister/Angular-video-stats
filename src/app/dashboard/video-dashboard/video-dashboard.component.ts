import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Video } from '../app-types';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  
  selectedVideo: string | undefined;
  videos: Video[] | undefined;

  constructor(http: HttpClient) { 
    http
      .get<Video[]>('https://api.angularbootcamp.com/videos')
      .subscribe(videos => (this.videos = videos))
  }

  ngOnInit(): void {
  }

  onVideoSelected(id: string) {
    this.selectedVideo = id;
  }
}
