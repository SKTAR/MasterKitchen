import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { IngredientRoutingModule } from './ingredient-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({
  declarations: [],
  imports: [
    IngredientRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class IngredientModule { }
