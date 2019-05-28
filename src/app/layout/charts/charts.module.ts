import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';

@NgModule({
  declarations: [ChartsComponent],
  imports: [
    CommonModule,
  //  Ng2Charts,
    ChartsRoutingModule,
    PageHeaderModule
  ]
})
export class ChartsModule { }
