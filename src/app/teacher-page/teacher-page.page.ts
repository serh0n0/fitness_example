import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { teacher,Teacher,initialize } from '../services/bucket';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.page.html',
  styleUrls: ['./teacher-page.page.scss'],
})
export class TeacherPagePage implements OnInit {
id:any;
teacher: Teacher;
  constructor(private router: ActivatedRoute) { 
    initialize({ identity:environment.token });
  }

  async ngOnInit() {
   this.id = this.router.snapshot.params.id;
   this.teacher = await this.getTeacher();
    console.log(this.teacher);
    

    
  }
  async getTeacher () {
    return teacher.get(this.id);
  }

}
