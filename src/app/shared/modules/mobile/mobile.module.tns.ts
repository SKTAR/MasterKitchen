import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ActionbarComponent } from './components/actionbar/actionbar.component';
import { NumricButtonComponent } from './components/numric-button/numric-button.component';
import { HideActionBarDirective } from '../../directives/hide-actionbar-directive';

@NgModule({
  declarations: [ActionbarComponent, NumricButtonComponent, HideActionBarDirective],
  imports: [
    NativeScriptCommonModule
  ],
  exports: [
    ActionbarComponent,
    NumricButtonComponent,
    HideActionBarDirective
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MobileModule { }
