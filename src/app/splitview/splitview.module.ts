import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplitviewRoutingModule } from './splitview-routing.module';
import { SplitviewComponent } from './splitview.component';

@NgModule({
  declarations: [SplitviewComponent],
  imports: [
    CommonModule,
    SplitviewRoutingModule
  ]
})
export class SplitviewModule { }
