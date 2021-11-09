import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatchedVideosPagePage } from './watched-videos-page.page';

const routes: Routes = [
  {
    path: ':id',
    component: WatchedVideosPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WatchedVideosPagePageRoutingModule {}
