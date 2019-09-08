import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common'
import { DiaglogComponent } from './diaglog/diaglog.component';
import { ActionbarComponent } from './actionbar/actionbar.component';
import { IncreaseButtonComponent } from './increase-button/increase-button.component';
import { HideActionBarDirective } from './directives/hide-actionbar-directive';


@NgModule({
  declarations: [IncreaseButtonComponent, HideActionBarDirective, DiaglogComponent, ActionbarComponent],
  imports: [
    NativeScriptCommonModule
  ],
  exports: [
    ActionbarComponent,
    IncreaseButtonComponent,
    HideActionBarDirective,
    DiaglogComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MobileModule { }
