import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { menuController } from '@ionic/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
     private menu: MenuController

  ) {
  }
  click() {
    this.menu.close()
  }
}
