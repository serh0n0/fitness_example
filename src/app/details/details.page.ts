import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, Query } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { video, Video, initialize, category, Category } from '../services/bucket';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id: any;
  video: Video[];
  category: Category;
  constructor(private router: ActivatedRoute) {
    initialize({ identity:environment.token });


  }
  async ngOnInit() {
   this.id = this.router.snapshot.params.id;


    this.video = await this.getVideo();
    this.category = await this.getCategory();




  }
  async getVideo() {
    return video.getAll({ queryParams: { filter: { category: this.id }, relation: true } });

  }
  async getCategory() {
    return category.get(this.id);

  }

}
