import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectMenuComponent } from './select-menu.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SelectMenuComponent,
     NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptUIListViewModule,   // RadListView
    MobileModule,
  ]
})
export class SelectMenuModule { }
