import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [PageHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PageHeaderComponent]
})
export class PageHeaderModule { }
