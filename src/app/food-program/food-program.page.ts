import { ReturnStatement, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { food_program,Food_Program, initialize} from '../services/bucket';
@Component({
  selector: 'app-food-program',
  templateUrl: './food-program.page.html',
  styleUrls: ['./food-program.page.scss'],
})
export class FoodProgramPage implements OnInit {
id:any;
foodProgram:Food_Program[];
  constructor(private router: ActivatedRoute) {
    initialize({identity:environment.token});

   }

 async ngOnInit() {
    this.id = this.router.snapshot.params.id;
    this.foodProgram = await this.getFoodProgram();
    console.log(this.foodProgram)
  }
  async getFoodProgram () {
    return food_program.getAll({queryParams:{filter:{user:this.id},relation:true}})
  }
}
