import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from './dashboard/app-types';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {
  constructor(private http: HttpClient) {}

  getVideoData(): Observable<Video[]> {
    return this.http
      .get<Video[]>('https://api.angularbootcamp.com/videos');
  }
}
