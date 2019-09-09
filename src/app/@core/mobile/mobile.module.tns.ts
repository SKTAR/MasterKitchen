import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common'
import { DiaglogComponent } from './diaglog/diaglog.component';
import { ActionbarComponent } from './actionbar/actionbar.component';
import { IncreaseButtonComponent } from './increase-button/increase-button.component';
import { HideActionBarDirective } from './directives/hide-actionbar-directive';
import { FloatBtnComponent } from './float-btn/float-btn.component';


@NgModule({
  declarations: [IncreaseButtonComponent, HideActionBarDirective, DiaglogComponent, ActionbarComponent, FloatBtnComponent],
  imports: [
    NativeScriptCommonModule
  ],
  exports: [
    ActionbarComponent,
    IncreaseButtonComponent,
    HideActionBarDirective,
    DiaglogComponent,
    FloatBtnComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MobileModule { }
