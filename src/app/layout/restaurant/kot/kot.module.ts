import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KotRoutingModule } from './kot-routing.module';
import { KotComponent } from './kot.component';
// import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [KotComponent],
  imports: [
    CommonModule,
    KotRoutingModule,
    
  ]
})
export class KotModule { }
