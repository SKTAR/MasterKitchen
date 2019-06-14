import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewstationRoutingModule } from './viewstation-routing.module';
import { ViewstationComponent } from './viewstation.component';

@NgModule({
  declarations: [ViewstationComponent],
  imports: [
    CommonModule,
    ViewstationRoutingModule
  ]
})
export class ViewstationModule { }
