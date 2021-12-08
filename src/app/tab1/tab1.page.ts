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
text="sEST Test2 pp DENEME TEST TEST"
a:any
b:any
  constructor() {
    initialize({identity:environment.token});
  }

  async ngOnInit() {
   this.branches=await this.getBranches();
    this.teacher = await this.getTeacher();
    this.a=this.text.split(' ');
    console.log(this.a);
    
    for (let i=0;i<this.a?.length;i++)
    {
      if(i==0)
      {
          this.a[i]=this.a[i].toLowerCase();                    
      }
      else {
        this.a[i]=this.a[i].toLowerCase();                    
        this.b=this.a[i].split('');
        this.b[0]=this.b[0].toUpperCase();
        this.a[i]=this.b.toString().replace(/,/g,'') 
      }
    }
    console.log(this.a.toString().replace(/,/g,''));
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
