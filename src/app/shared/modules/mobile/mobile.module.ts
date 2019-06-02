import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionbarComponent } from './components/actionbar/actionbar.component';
import { NumricButtonComponent } from './components/numric-button/numric-button.component';

@NgModule({
  declarations: [ActionbarComponent, NumricButtonComponent],
  imports: [
    CommonModule
  ]
})
export class MobileModule { }
