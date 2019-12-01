import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaglogComponent } from './diaglog/diaglog.component';
import { ActionbarComponent } from './actionbar/actionbar.component';
import { IncreaseButtonComponent } from './increase-button/increase-button.component';
import { FloatBtnComponent } from './float-btn/float-btn.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';


@NgModule({
  declarations: [IncreaseButtonComponent, DiaglogComponent, ActionbarComponent, FloatBtnComponent, DragDropComponent],
  imports: [
    CommonModule
  ]
})
export class MobileModule { }
