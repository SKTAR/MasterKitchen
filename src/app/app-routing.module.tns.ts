import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { routes2 } from './app.routes';

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes2)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
