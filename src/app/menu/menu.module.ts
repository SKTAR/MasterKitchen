import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { FormsModule } from '@angular/forms';
import { MenuItemsComponent } from './menu-items/menu-items.component';


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
