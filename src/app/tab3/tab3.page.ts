/* eslint-disable max-len */
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import {user,User,initialize,watched_video,Watched_Video,training,Training,performance,Performance} from '../services/bucket';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
user: User;
watchVideos: Watched_Video[];
control:boolean = true;
traning: Training[];
performance: Performance[];
  constructor() {
    initialize({identity:environment.token});

    }

  async ngOnInit() {
   this.user = await this.getUser();
   this.watchVideos = await this.getWatchVideos();
   this.traning = await this.getTraning();
   this.performance = await this.getPerformance();   
  }
  async getUser() {
    return user.get("618b75295ee9b9002f154683"); 
  }
  async getWatchVideos() {
    return watched_video.getAll({queryParams:{filter:{user:'618b75295ee9b9002f154683'},relation:true,sort:{"_id":-1}}}); 
  }
  async getTraning() {
    return training.getAll({queryParams:{filter:{user:'618b75295ee9b9002f154683'},relation:"packet.videos"}}); 
  }
  async getPerformance() {
    return performance.getAll({queryParams:{filter:{user:'618b75295ee9b9002f154683'},relation:true}}); 
  }
  slideOpts = {
    initialSlide: 1,
    sliderPerView:1,
    spaceBetween:0,
    speed: 400,
    autoplay:true
  }
}

