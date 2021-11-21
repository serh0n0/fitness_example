import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { watched_video,Watched_Video, initialize} from '../services/bucket';
@Component({
  selector: 'app-watched-videos-page',
  templateUrl: './watched-videos-page.page.html',
  styleUrls: ['./watched-videos-page.page.scss'],
})
export class WatchedVideosPagePage implements OnInit {
watchedVideos: Watched_Video[];
id:any;
  constructor(private router: ActivatedRoute) { 

    initialize({ identity:environment.token });

  }

 async ngOnInit() {
    this.id = this.router.snapshot.params.id;
    this.watchedVideos = await this.getWatchedVideos();
    console.log(this.watchedVideos) 
  }

 async getWatchedVideos() {
    return watched_video.getAll({ queryParams: { filter: { user: this.id }, relation: true } });
  }
  slideOpts = {
    initialSlide: 1,
    sliderPerView:1,
    spaceBetween:0,
    speed: 400,
    autoplay:true
  }
}
