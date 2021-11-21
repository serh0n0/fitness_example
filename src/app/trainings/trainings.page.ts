import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { training,Training,initialize } from '../services/bucket';
@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.page.html',
  styleUrls: ['./trainings.page.scss'],
})
export class TrainingsPage implements OnInit {
id:any;
training: Training[];
  constructor(private router: ActivatedRoute) { 
    initialize({ identity:environment.token });

  }

  async ngOnInit() {
   this.id = this.router.snapshot.params.id;
    this.training = await this.getTraining();
    console.log(this.training);
    
  }
 async getTraining () {
  return training.getAll({ queryParams: { filter: { user: this.id }, relation:"packet.videos" } });
 }

 slideOpts = {
  initialSlide: 1,
  sliderPerView:1,
  spaceBetween:0,
  speed: 400,
  autoplay:true
}

}
