import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripviewPageRoutingModule } from './tripview-routing.module';

import { TripviewPage } from './tripview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripviewPageRoutingModule
  ],
  declarations: [TripviewPage]
})
export class TripviewPageModule {}
