import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripviewPage } from './tripview.page';

const routes: Routes = [
  {
    path: '',
    component: TripviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripviewPageRoutingModule {}
