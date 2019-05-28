import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsElementRoutingModule } from './bs-element-routing.module';
import { BsElementComponent } from './bs-element.component';

@NgModule({
  declarations: [BsElementComponent],
  imports: [
    CommonModule,
    BsElementRoutingModule
  ]
})
export class BsElementModule {
    @Input() heading: string;
    @Input() icon: string;
}
