import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { MenulistComponent } from './menulist/menulist.component';
import { IngredientComponent } from './ingredient/ingredient.component';


@NgModule({
  declarations: [MenulistComponent, IngredientComponent],
  imports: [
    RestaurantRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RestaurantModule { }
