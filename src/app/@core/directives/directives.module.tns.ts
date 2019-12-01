import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AutoGridColumns, AutoGridRows } from './custom/grid.directive';
import { AutofocusDirective} from './custom/autofocus.directive';
import { HashDirective} from './custom/hash.directive';
@NgModule({
  declarations: [
    AutoGridColumns,
    AutoGridRows,
    AutofocusDirective,
    HashDirective

  ],
  imports: [
    NativeScriptCommonModule
  ],
  exports: [
    AutoGridColumns,
    AutoGridRows,
    AutofocusDirective,
    HashDirective
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DirectivesModule { }
