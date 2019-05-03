import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { FormsModule } from '@angular/forms';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { MenuRoutingModule } from './menu-routing.module';




@NgModule({
  declarations: [
     MenuComponent, 
     MenuCategoryComponent, MenuItemsComponent,
    ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule

   // RouterModule.forChild(routes)
  ]
})
export class MenuModule { }
