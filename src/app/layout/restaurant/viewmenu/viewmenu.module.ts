import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewmenuRoutingModule } from './viewmenu-routing.module';
import { ViewmenuComponent } from './viewmenu.component';
import { MenucategoryComponent } from './menucategory/menucategory.component';
import { CreatemenuComponent } from './createmenu/createmenu.component';
import { IngredientModule } from '../ingredient/ingredient.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ViewmenuComponent, MenucategoryComponent, CreatemenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ViewmenuRoutingModule,
    IngredientModule,
  ]
})
export class ViewmenuModule { }
