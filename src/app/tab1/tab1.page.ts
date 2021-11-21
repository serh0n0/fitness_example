/* eslint-disable max-len */
import { Component, Query } from '@angular/core';
import { environment } from 'src/environments/environment';
import {category,Category,initialize,video,Video,teacher,Teacher,} from '../services/bucket';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
category: Category[];
video: Video[];
teacher: Teacher[];
  constructor() {
    initialize({identity:environment.token});
  }

  async ngOnInit() {
   this.category=await this.getCategory();
   this.video = await this.getVideo();
    this.teacher = await this.getTeacher();
  }

  async getCategory() {
    return category.getAll();
  }
  async getVideo() {
    return video.getAll({queryParams:{limit:3}})
  }

  slideOpts = {
    centeredSlide:true,
    spaceBetween:10,
    slidesPerView:2
  }
  async getTeacher() {
    return teacher.getAll();
  }
}
