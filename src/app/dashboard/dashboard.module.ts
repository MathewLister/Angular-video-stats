import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoThumbNailComponent } from './video-thumb-nail/video-thumb-nail.component';

const dashboardRoutes: Routes = [
  { 
    path: '', component: VideoDashboardComponent
  }
]

@NgModule({
  declarations: [
    VideoDashboardComponent,
    StatFiltersComponent,
    VideoListComponent,
    VideoPlayerComponent,
    VideoThumbNailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ]
})
export class DashboardModule { }
