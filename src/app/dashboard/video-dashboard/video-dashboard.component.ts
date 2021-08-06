import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VideoDataService } from 'src/app/video-data.service';
import { Video } from '../app-types';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  
  selectedVideo: string | undefined;
  videos: Video[] | undefined;

  constructor(private videoSvc: VideoDataService) {
    videoSvc.getVideoData()
      .subscribe(videos => (this.videos = videos));
  }

  ngOnInit(): void {}

  onVideoSelected(id: string) {
    this.selectedVideo = id;
  }
}
