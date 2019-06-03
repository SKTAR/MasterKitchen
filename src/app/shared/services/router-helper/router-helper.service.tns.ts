import {  Injectable, OnInit, Input } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { NavigationExtras } from '@angular/router';

declare var android: any;

@Injectable({providedIn: 'root'})
export class RouterHelperService implements OnInit {

  constructor(private routerExt: RouterExtensions) {}

  ngOnInit() {}

  get canGoBack() {
    return this.routerExt.canGoBack();
  }

  onGoBack() {
    this.routerExt.backToPreviousPage();
  }
  goToPage(routePath: string, data: any) {
   this.routerExt.navigate([routePath, { data }]);
  }


  goToPageExtra(routePath: string, navigationExtra: NavigationExtras) {
    this.routerExt.navigate([routePath], navigationExtra);
  }
}
