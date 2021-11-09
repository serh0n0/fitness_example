/* eslint-disable max-len */
import { Component } from '@angular/core';
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
    initialize({identity:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlkZW50aWZpZXIiOiJzcGljYSIsInBvbGljaWVzIjpbIkFwaUtleUZ1bGxBY2Nlc3MiLCJJZGVudGl0eUZ1bGxBY2Nlc3MiLCJTdHJhdGVneUZ1bGxBY2Nlc3MiLCJQb2xpY3lGdWxsQWNjZXNzIiwiUGFzc3BvcnRGdWxsQWNjZXNzIiwiQWN0aXZpdHlGdWxsQWNjZXNzIiwiU3RvcmFnZUZ1bGxBY2Nlc3MiLCJGdW5jdGlvbkZ1bGxBY2Nlc3MiLCJCdWNrZXRGdWxsQWNjZXNzIiwiRGFzaGJvYXJkRnVsbEFjY2VzcyIsIldlYmhvb2tGdWxsQWNjZXNzIiwiUHJlZmVyZW5jZUZ1bGxBY2Nlc3MiLCJTdGF0dXNGdWxsQWNjZXNzIl19.eyJfaWQiOiI2MTY4NDc2NTIyZDVmNDIzMWU4N2I1YWUiLCJpZGVudGlmaWVyIjoic3BpY2EiLCJwb2xpY2llcyI6WyJBcGlLZXlGdWxsQWNjZXNzIiwiSWRlbnRpdHlGdWxsQWNjZXNzIiwiU3RyYXRlZ3lGdWxsQWNjZXNzIiwiUG9saWN5RnVsbEFjY2VzcyIsIlBhc3Nwb3J0RnVsbEFjY2VzcyIsIkFjdGl2aXR5RnVsbEFjY2VzcyIsIlN0b3JhZ2VGdWxsQWNjZXNzIiwiRnVuY3Rpb25GdWxsQWNjZXNzIiwiQnVja2V0RnVsbEFjY2VzcyIsIkRhc2hib2FyZEZ1bGxBY2Nlc3MiLCJXZWJob29rRnVsbEFjY2VzcyIsIlByZWZlcmVuY2VGdWxsQWNjZXNzIiwiU3RhdHVzRnVsbEFjY2VzcyJdLCJpYXQiOjE2MzYzNjU0MTIsImV4cCI6MTYzNjUzODIxMiwiYXVkIjoic3BpY2EuaW8iLCJpc3MiOiJodHRwczovL2Fzc2V0LXBsYXlncm91bmQtMDVkYWUuaHEuc3BpY2FlbmdpbmUuY29tL2FwaSJ9.mlJUAUmxpHdk14nKF1t2z2hMAzHId7fHgQUJD_T-bdw'});
    }

  async ngOnInit() {
   this.user = await this.getUser();
   this.watchVideos = await this.getWatchVideos();
   this.traning = await this.getTraning();
   this.performance = await this.getPerformance();   
  }
  async getUser() {
    return user.get("618144f6b0ba86002e5d659c"); 
  }
  async getWatchVideos() {
    return watched_video.getAll({queryParams:{filter:{user:'618144f6b0ba86002e5d659c'},relation:true,sort:{"_id":-1}}}); 
  }
  async getTraning() {
    return training.getAll({queryParams:{filter:{user:'618144f6b0ba86002e5d659c'},relation:"packet.videos"}}); 
  }
  async getPerformance() {
    return performance.getAll({queryParams:{filter:{user:'618144f6b0ba86002e5d659c'},relation:true}}); 
  }
  slideOpts = {
    initialSlide: 1,
    sliderPerView:1,
    spaceBetween:0,
    speed: 400,
    autoplay:true
  }
}

