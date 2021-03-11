import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChPageRoutingModule } from './ch-routing.module';

import { ChPage } from './ch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChPageRoutingModule
  ],
  declarations: [ChPage]
})
export class ChPageModule {}
