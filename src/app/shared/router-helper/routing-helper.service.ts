import {  Injectable, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


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

  goToPage(routePath: string){
    //  this.routerExt.navigate(['/menu'],{clearHistory: false});
  }  
}
