import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { video,Video,initialize,user,User } from '../services/bucket';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.page.html',
  styleUrls: ['./video-details.page.scss'],
})
export class VideoDetailsPage implements OnInit {
id:any;
video:Video;
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
  
}