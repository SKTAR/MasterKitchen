import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ActionbarComponent } from './components/actionbar/actionbar.component';
import { NumricButtonComponent } from './components/numric-button/numric-button.component';
import { DiaglogComponent } from './components/diaglog/diaglog.component';
import { ActionbarComponent } from './components/actionbar/actionbar.component';


@NgModule({
  declarations: [NumricButtonComponent, DiaglogComponent, ActionbarComponent],
  imports: [
    CommonModule
  ]
})
export class MobileModule { }
