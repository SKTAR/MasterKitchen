import {  Injectable, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


declare var android: any;

@Injectable({providedIn: 'root'})
export class RoutingHelperService implements OnInit {
  @Input() title: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  get canGoBack() {
   return false;
  }

  onGoBack() {
  }

  goToPageExtra(routePath: string , data: any,navigationExtra: NavigationExtras) {
    //  this.routerExt.navigate(['/menu'],{clearHistory: false});
  }
  goToPage(routePath: string , data: any) {
    //  this.routerExt.navigate(['/menu'],{clearHistory: false});
  }
}
