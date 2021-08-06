import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video } from './dashboard/app-types';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {
  constructor(private http: HttpClient) {}

  getVideoData(): Observable<Video[]> {
    return this.http
      .get<Video[]>('https://api.angularbootcamp.com/videos')
      .pipe(
        map(allVideos => allVideos.slice(0, 3))
      );
  }
}
