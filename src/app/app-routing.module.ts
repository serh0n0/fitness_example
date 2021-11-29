import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'video-details',
    loadChildren: () => import('./video-details/video-details.module').then( m => m.VideoDetailsPageModule)
  },
  {
    path: 'trainings',
    loadChildren: () => import('./trainings/trainings.module').then( m => m.TrainingsPageModule)
  },
  {
    path: 'watched-videos-page',
    loadChildren: () => import('./watched-videos-page/watched-videos-page.module').then( m => m.WatchedVideosPagePageModule)
  },
  {
    path: 'food-program',
    loadChildren: () => import('./food-program/food-program.module').then( m => m.FoodProgramPageModule)
  },
  {
    path: 'teacher-page',
    loadChildren: () => import('./teacher-page/teacher-page.module').then( m => m.TeacherPagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'category-details',
    loadChildren: () => import('./category-details/category-details.module').then( m => m.CategoryDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
