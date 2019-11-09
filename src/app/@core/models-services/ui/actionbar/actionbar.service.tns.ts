import {  Injectable, OnInit, Input } from '@angular/core';
import { isAndroid, isIOS, device, screen } from 'tns-core-modules/platform';
import { Page, EventData } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { HomeViewModel } from '../../home-view.model';

declare var android: any;

@Injectable({providedIn: 'root'})
export class ActionBarService implements OnInit {
 
  constructor(private page: Page, private router: RouterExtensions) {}

  ngOnInit() {}

  get canGoBack() {
    return this.router.canGoBack();
  }

  onGoBack() {
    this.router.backToPreviousPage();
  }

  onLoadedActionBar() {
    if (isAndroid) {
      const androidToolbar = this.page.actionBar.nativeView;
      const backButton = androidToolbar.getNavigationIcon();
      if (backButton) {
        backButton.setColorFilter(
          android.graphics.Color.parseColor('#171717'),
          (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
        );
      }
    }
  }

  drawerLoaded(args) {
     
   

    
  }

//   pageLoaded(args: EventData) {
//     let page = <Page>args.object;
//     page.bindingContext = new HomeViewModel();
// }
  
}
