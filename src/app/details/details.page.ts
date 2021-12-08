import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, Query } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { initialize, category, Category,teacher_speciality,Teacher_Speciality } from '../services/bucket';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id: any;
  category: Category[];
  branch:Teacher_Speciality;
  text:any;
  constructor(private router: ActivatedRoute) {
    initialize({ identity:environment.token });


  }
  async ionViewWillEnter(){
    this.category = await this.getCategory();
    this.branch = await this.getBranch();

  
    if(this.category?.length<=0)
  
    {
        this.text='not found'
      
    }
    else {
            
    }
  }
  async ngOnInit() {
   this.id = this.router.snapshot.params.id;

    




  }
  async getCategory() {
    return category.getAll({queryParams:{filter:{branches:this.id},relation:true}});

  }
  async getBranch () {
    return teacher_speciality.get(this.id);
  }


}
