import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { IngredientRoutingModule } from './ingredient-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { IngredientComponent } from './ingredient.component';

@NgModule({
  declarations: [IngredientComponent],
  imports: [
    IngredientRoutingModule,
    NativeScriptCommonModule
  ],
  exports: [
    IngredientComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class IngredientModule { }
