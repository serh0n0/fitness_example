import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { async } from 'q';
import { environment } from 'src/environments/environment';
import { video,Video,initialize,user,User,watched_video,Watched_Video } from '../services/bucket';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.page.html',
  styleUrls: ['./video-details.page.scss'],
})
export class VideoDetailsPage implements OnInit {
id:any;
video:Video;
userVideo;
  constructor(private router: ActivatedRoute) {
    initialize({ identity:environment.token });
  
  }
 async ngOnInit() {
   this.id = this.router.snapshot.params.id;
   this.video = await this.getVideo();
   
  }
  async getVideo() {
    return video.get(this.id);
  }
  async watchVideo () {    
  return watched_video.getAll({queryParams:{filter:{user:environment.user,video:this.id}}});
  
  }

async  watchedVideo() {
    this.userVideo = await this.watchVideo();
    
    if (!this.userVideo.length) {
      watched_video.insert({
        user:environment.user,
        video:this.id,
      })
      
    }
    else {
      this.userVideo[0].watched_date = new Date();
      watched_video.update(this.userVideo[0])
      
    }
  
  }
   
    
}