/* eslint-disable max-len */
import { Component, Query } from '@angular/core';
import { environment } from 'src/environments/environment';
import {initialize,teacher,Teacher,teacher_speciality,Teacher_Speciality} from '../services/bucket';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
branches: Teacher_Speciality[];
teacher: Teacher[];
  constructor() {
    initialize({identity:environment.token});
  }

  async ngOnInit() {
   this.branches=await this.getBranches();
    this.teacher = await this.getTeacher();
  }

  async getBranches() {
    return teacher_speciality.getAll();
  }

  slideOpts = {
    centeredSlide:true,
    spaceBetween:10,
    slidesPerView:2,
    autoplay:true
  }
  async getTeacher() {
    return teacher.getAll();
  }
}
