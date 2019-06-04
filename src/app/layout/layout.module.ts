import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { IngredientComponent } from './restaurant/ingredient/ingredient.component';
import { MenuitemsComponent } from './restaurant/menu/menuitems/menuitems.component';
import { MenuSelectComponent } from './restaurant/menu/menu-select/menu-select.component';

@NgModule({
  declarations: [LayoutComponent,
    HeaderComponent, SidebarComponent, MenuSelectComponent,IngredientComponent,
    MenuitemsComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule,
    NgbDropdownModule,
    FormsModule
  ]
})
export class LayoutModule { }
