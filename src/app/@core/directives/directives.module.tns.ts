import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AutoGridColumns, AutoGridRows } from './grid-auto-row-column/grid.directive';
@NgModule({
  declarations: [AutoGridColumns,AutoGridRows],
  imports: [
    NativeScriptCommonModule
  ],
  exports: [
    AutoGridColumns,
    AutoGridRows
   ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DirectivesModule { }
