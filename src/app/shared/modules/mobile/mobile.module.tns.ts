import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ActionbarComponent } from './components/actionbar/actionbar.component';
import { NumricButtonComponent } from './components/numric-button/numric-button.component';

@NgModule({
  declarations: [ActionbarComponent, NumricButtonComponent],
  imports: [
    NativeScriptCommonModule
  ],
  exports: [
    ActionbarComponent,
    NumricButtonComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MobileModule { }
