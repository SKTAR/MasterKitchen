import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './ingredient.common';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientRoutingModule { }
