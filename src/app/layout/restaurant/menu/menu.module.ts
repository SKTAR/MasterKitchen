import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuSelectComponent } from './menu-select/menu-select.component';
import { MenuitemsComponent } from './menuitems/menuitems.component';
import { FormsModule } from '@angular/forms';
import { IngredientModule } from '../ingredient/ingredient.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ MenuSelectComponent, MenuitemsComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule,
    IngredientModule,
    NgbModule
  ],
  exports: [
    MenuSelectComponent, MenuitemsComponent
  ],
})
export class MenuModule { }
