/* eslint-disable max-len */
import { Component } from '@angular/core';
import {category,Category,initialize} from '../services/bucket';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
category: Category[];
  constructor() {
    initialize({identity:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlkZW50aWZpZXIiOiJzcGljYSIsInBvbGljaWVzIjpbIkFwaUtleUZ1bGxBY2Nlc3MiLCJJZGVudGl0eUZ1bGxBY2Nlc3MiLCJTdHJhdGVneUZ1bGxBY2Nlc3MiLCJQb2xpY3lGdWxsQWNjZXNzIiwiUGFzc3BvcnRGdWxsQWNjZXNzIiwiQWN0aXZpdHlGdWxsQWNjZXNzIiwiU3RvcmFnZUZ1bGxBY2Nlc3MiLCJGdW5jdGlvbkZ1bGxBY2Nlc3MiLCJCdWNrZXRGdWxsQWNjZXNzIiwiRGFzaGJvYXJkRnVsbEFjY2VzcyIsIldlYmhvb2tGdWxsQWNjZXNzIiwiUHJlZmVyZW5jZUZ1bGxBY2Nlc3MiLCJTdGF0dXNGdWxsQWNjZXNzIl19.eyJfaWQiOiI2MTY4NDc2NTIyZDVmNDIzMWU4N2I1YWUiLCJpZGVudGlmaWVyIjoic3BpY2EiLCJwb2xpY2llcyI6WyJBcGlLZXlGdWxsQWNjZXNzIiwiSWRlbnRpdHlGdWxsQWNjZXNzIiwiU3RyYXRlZ3lGdWxsQWNjZXNzIiwiUG9saWN5RnVsbEFjY2VzcyIsIlBhc3Nwb3J0RnVsbEFjY2VzcyIsIkFjdGl2aXR5RnVsbEFjY2VzcyIsIlN0b3JhZ2VGdWxsQWNjZXNzIiwiRnVuY3Rpb25GdWxsQWNjZXNzIiwiQnVja2V0RnVsbEFjY2VzcyIsIkRhc2hib2FyZEZ1bGxBY2Nlc3MiLCJXZWJob29rRnVsbEFjY2VzcyIsIlByZWZlcmVuY2VGdWxsQWNjZXNzIiwiU3RhdHVzRnVsbEFjY2VzcyJdLCJpYXQiOjE2MzYxOTI0NzcsImV4cCI6MTYzNjM2NTI3NywiYXVkIjoic3BpY2EuaW8iLCJpc3MiOiJodHRwczovL2Fzc2V0LXBsYXlncm91bmQtMDVkYWUuaHEuc3BpY2FlbmdpbmUuY29tL2FwaSJ9.TdiBkEa8YFbB63C9mspbDUddtpxv0-30uR16YrIMIuM'});
  }

  async ngOnInit() {
   this.category=await this.getCategory();
  }

  async getCategory() {
    return category.getAll();
  }
}
