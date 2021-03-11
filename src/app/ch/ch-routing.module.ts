import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChPage } from './ch.page';

const routes: Routes = [
  {
    path: '',
    component: ChPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChPageRoutingModule {}
