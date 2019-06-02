import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsElementRoutingModule } from './bs-element-routing.module';
import { BsElementComponent } from './bs-element.component';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [BsElementComponent],
  imports: [
    CommonModule,
    BsElementRoutingModule,
    PageHeaderModule,
    NgbModule
  ]
})
export class BsElementModule {
}
