import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationRoutingModule } from './station-routing.module';
import { StationComponent } from './station.component';
import { FormsModule } from '@angular/forms';
import { EmployeeModule } from '../employee/employee.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [StationComponent],
  imports: [
    CommonModule,
    StationRoutingModule,
    FormsModule,
    EmployeeModule,
    NgbModule
  ]
})
export class StationModule { }
