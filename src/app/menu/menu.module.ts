import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { FormsModule } from '@angular/forms';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { MenuRoutingModule } from './menu-routing.module';
import { IngredientComponent } from './ingredient/ingredient.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
     MenuComponent, 
     MenuCategoryComponent, MenuItemsComponent, IngredientComponent
    ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule,
    NgbModule

   // RouterModule.forChild(routes)
  ]
})
export class MenuModule { }
