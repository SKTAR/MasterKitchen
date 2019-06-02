import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes } from '../restaurant/restaurant.common';



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
