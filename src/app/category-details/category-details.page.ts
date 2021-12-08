import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { video,Video,initialize } from '../services/bucket';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.page.html',
  styleUrls: ['./category-details.page.scss'],
})
export class CategoryDetailsPage implements OnInit {

  constructor(private router: ActivatedRoute) {
    initialize({ identity:environment.token });
   }
  id:any;
  video: Video[];
  text:any;
  async ionViewWillEnter(){
    this.video = await this.getVideos(); 

  
    if(this.video?.length<=0)
  
    {
        this.text='not found'
      
    }
    else {
            
    }
  }
 async ngOnInit() {
    this.id = this.router.snapshot.params.id;       
  }

   async getVideos() {
      return video.getAll({queryParams:{filter:{category:this.id},relation:true}})
  }

}
