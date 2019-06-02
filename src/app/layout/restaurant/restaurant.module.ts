import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { MenulistComponent } from './menulist/menulist.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [MenulistComponent, IngredientComponent],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class RestaurantModule { }
