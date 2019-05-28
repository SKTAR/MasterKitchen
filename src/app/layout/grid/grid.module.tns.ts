import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { GridRoutingModule } from './grid-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { GridComponent } from './grid.component';

@NgModule({
  declarations: [GridComponent],
  imports: [
    GridRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GridModule { }
