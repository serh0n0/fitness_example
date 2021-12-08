import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { food_program,Food_Program,initialize } from '../services/bucket';

@Component({
  selector: 'app-food-program-detail',
  templateUrl: './food-program-detail.page.html',
  styleUrls: ['./food-program-detail.page.scss'],
})
export class FoodProgramDetailPage implements OnInit {
id:any;
program:any;
  constructor(private router: ActivatedRoute) { 
    initialize ({identity: environment.token})
  }

 async ngOnInit() {
    this.id = this.router.snapshot.params.id;
    this.program = await this.getProgram();
    console.log(this.program);
    
  }
  async getProgram() {
    return food_program.getAll({queryParams:{filter:{_id:this.id}}});
  }

}
