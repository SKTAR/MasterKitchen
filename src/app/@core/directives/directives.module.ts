import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoGridColumns, AutoGridRows } from './grid-auto-row-column/grid.directive';

@NgModule({
  declarations: [AutoGridColumns,AutoGridRows],
  imports: [
    CommonModule
  ],
exports: [
    AutoGridColumns,
    AutoGridRows
   ]

})
export class DirectivesModule { }
