import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkLoadRoutingModule } from './bulk-load-routing.module';
import { BulkLoadComponent } from './bulk-load.component';
import { MenuBulkLoadComponent } from './menu-bulk-load/menu-bulk-load.component';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { InventoryBulkLoadComponent } from './inventory-bulk-load/inventory-bulk-load.component';
@NgModule({
  declarations: [BulkLoadComponent, MenuBulkLoadComponent, InventoryBulkLoadComponent],
  imports: [
    CommonModule,
    BulkLoadRoutingModule,
    FormsModule,
    Ng2SmartTableModule
  ]
})
export class BulkLoadModule { }
