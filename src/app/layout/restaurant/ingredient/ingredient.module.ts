import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientRoutingModule } from './ingredient-routing.module';
import { IngredientComponent } from './ingredient.component';

@NgModule({
  declarations: [IngredientComponent],
  imports: [
    CommonModule,
    IngredientRoutingModule
  ],
  exports: [
    IngredientComponent
  ],
})
export class IngredientModule { }
