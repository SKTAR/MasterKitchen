import {  Injectable, OnInit, Input } from '@angular/core';
import { isAndroid, isIOS, device, screen } from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';

declare var android: any;

@Injectable({providedIn: 'root'})
export class ActionBarService implements OnInit {
  @Input() title: string;

  constructor(private page: Page, private router: RouterExtensions) {}

  ngOnInit() {}

   get canGoBack() {
     return null;
  }

  onGoBack() {
    this.router.backToPreviousPage();
  }

  onLoadedActionBar() {
  }

 


}
