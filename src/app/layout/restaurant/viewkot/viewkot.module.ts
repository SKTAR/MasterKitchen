import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewkotRoutingModule } from './viewkot-routing.module';
import { ViewkotComponent } from './viewkot.component';
import { SplitviewKotComponent } from './splitview-kot/splitview-kot.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewkotComponent, SplitviewKotComponent],
  imports: [
    CommonModule,
    ViewkotRoutingModule,
    FormsModule
  ]
})
export class ViewkotModule { }
