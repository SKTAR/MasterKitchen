import {  Injectable, OnInit, Input } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

declare var android: any;

@Injectable({providedIn: 'root'})
export class RoutingHelperService implements OnInit {

  constructor(private routerExt: RouterExtensions) {}

  ngOnInit() {}

  get canGoBack() {
    return this.routerExt.canGoBack();
  }

  onGoBack() {
    this.routerExt.backToPreviousPage();
  }
  goToPage(routePath: string){
    this.routerExt.navigate([routePath],{clearHistory: false});
  }  
 
}
