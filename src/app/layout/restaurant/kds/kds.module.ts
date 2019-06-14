import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KdsRoutingModule } from './kds-routing.module';
import { ViewstationComponent } from './viewstation/viewstation.component';

@NgModule({
  declarations: [ViewstationComponent],
  imports: [
    CommonModule,
    KdsRoutingModule
  ]
})
export class KdsModule { }
