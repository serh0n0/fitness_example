import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { video,Video,initialize,category,Category } from '../services/bucket';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
id:any;
video: Video[];
category: Category;
  constructor(private route: ActivatedRoute) { 
    initialize({identity:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlkZW50aWZpZXIiOiJzcGljYSIsInBvbGljaWVzIjpbIkFwaUtleUZ1bGxBY2Nlc3MiLCJJZGVudGl0eUZ1bGxBY2Nlc3MiLCJTdHJhdGVneUZ1bGxBY2Nlc3MiLCJQb2xpY3lGdWxsQWNjZXNzIiwiUGFzc3BvcnRGdWxsQWNjZXNzIiwiQWN0aXZpdHlGdWxsQWNjZXNzIiwiU3RvcmFnZUZ1bGxBY2Nlc3MiLCJGdW5jdGlvbkZ1bGxBY2Nlc3MiLCJCdWNrZXRGdWxsQWNjZXNzIiwiRGFzaGJvYXJkRnVsbEFjY2VzcyIsIldlYmhvb2tGdWxsQWNjZXNzIiwiUHJlZmVyZW5jZUZ1bGxBY2Nlc3MiLCJTdGF0dXNGdWxsQWNjZXNzIl19.eyJfaWQiOiI2MTY4NDc2NTIyZDVmNDIzMWU4N2I1YWUiLCJpZGVudGlmaWVyIjoic3BpY2EiLCJwb2xpY2llcyI6WyJBcGlLZXlGdWxsQWNjZXNzIiwiSWRlbnRpdHlGdWxsQWNjZXNzIiwiU3RyYXRlZ3lGdWxsQWNjZXNzIiwiUG9saWN5RnVsbEFjY2VzcyIsIlBhc3Nwb3J0RnVsbEFjY2VzcyIsIkFjdGl2aXR5RnVsbEFjY2VzcyIsIlN0b3JhZ2VGdWxsQWNjZXNzIiwiRnVuY3Rpb25GdWxsQWNjZXNzIiwiQnVja2V0RnVsbEFjY2VzcyIsIkRhc2hib2FyZEZ1bGxBY2Nlc3MiLCJXZWJob29rRnVsbEFjY2VzcyIsIlByZWZlcmVuY2VGdWxsQWNjZXNzIiwiU3RhdHVzRnVsbEFjY2VzcyJdLCJpYXQiOjE2MzYzNjU0MTIsImV4cCI6MTYzNjUzODIxMiwiYXVkIjoic3BpY2EuaW8iLCJpc3MiOiJodHRwczovL2Fzc2V0LXBsYXlncm91bmQtMDVkYWUuaHEuc3BpY2FlbmdpbmUuY29tL2FwaSJ9.mlJUAUmxpHdk14nKF1t2z2hMAzHId7fHgQUJD_T-bdw'});
  }

 async ngOnInit(){
   
   console.log(this.route.snapshot.queryParamMap.get('_id'));
   this.video = await this.getVideo();
   this.category = await this.getCategory();
   console.log(this.category[0].name)
   


  }
  async getVideo() {
    return video.getAll({queryParams:{filter:{category:this.id},relation:true}}); 

  }
  async getCategory() {
    return category.get(this.id); 

  }

}
