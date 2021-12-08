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
text:any;
  constructor(private router: ActivatedRoute) { 

    initialize({ identity:environment.token });

  }

async ionViewWillEnter(){
  this.watchedVideos = await this.getWatchedVideos();

  if(this.watchedVideos?.length<=0)

  {
      this.text='The video you watched was not found'
    
  }
  else {
          
  }
}
 async ngOnInit() {

  

    
  this.id = this.router.snapshot.params.id;
    
    
    
  }
  

 async getWatchedVideos() {
    return watched_video.getAll({ queryParams: { filter: { user: this.id }, relation: true ,limit:3,sort:{"watched_date":-1}} });
  }

    
}
