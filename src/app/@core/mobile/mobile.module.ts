import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaglogComponent } from './diaglog/diaglog.component';
import { ActionbarComponent } from './actionbar/actionbar.component';
import { IncreaseButtonComponent } from './increase-button/increase-button.component';


@NgModule({
  declarations: [IncreaseButtonComponent, DiaglogComponent, ActionbarComponent],
  imports: [
    CommonModule
  ]
})
export class MobileModule { }