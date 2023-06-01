import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'favicon.ico', redirectTo: '' },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
 
  {
    path: 'tripview',
    loadChildren: () => import('./pages/tripview/tripview.module').then( m => m.TripviewPageModule)
  },
  { path: 'favicon.ico', pathMatch: 'prefix', redirectTo: '../assets/icon/favicon.png' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabledBlocking' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
