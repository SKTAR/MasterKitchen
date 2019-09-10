import { Injectable } from '@angular/core';
import { RadSideDrawer, DrawerTransitionBase, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';
// import * as app from 'tns-core-modules/application';
import { Router, NavigationEnd } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { filter } from 'rxjs/operators';
import { isIOS, isAndroid } from 'tns-core-modules/platform/platform';
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
declare var UIView, NSMutableArray, NSIndexPath;
// import { Page } from 'tns-core-modules/ui/page';
@Injectable({providedIn: 'root'})
export class RadSideDrawerService {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    private sideDrawer: RadSideDrawer;
    constructor(private router: Router,
                private routerExtensions: RouterExtensions) {
    }

    public show() {
    //const sideDrawer = <RadSideDrawer>app.getRootView();
       this.sideDrawer.showDrawer();     
    
  }

  public hide() {
   // const sideDrawer = <RadSideDrawer>app.getRootView();
    this.sideDrawer.closeDrawer();
  }

 public load(args) {
   // args.page.actionBarHidden = true;
    this.sideDrawer = <RadSideDrawer>args.object;
    this._activatedUrl = '/dashboard';
      this._sideDrawerTransition = new SlideInOnTopTransition();

      this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
  }

  public get sideDrawerTransition(): DrawerTransitionBase {
      return this._sideDrawerTransition;
  }

  public isComponentSelected(url: string): boolean {
      return this._activatedUrl === url;
  }

  public onNavItemTap(navItemRoute: string): void {
      this.routerExtensions.navigate([navItemRoute], {
          transition: {
              name: 'fade'
          }
      });

      //const sideDrawer = <RadSideDrawer>app.getRootView();
      this.sideDrawer.closeDrawer();
  }
 

  onItemTap(event: ListViewEventData) {
    const listView = event.object,
        rowIndex = event.index,
        dataItem = event.view.bindingContext;

    dataItem.expanded = !dataItem.expanded;
    if (isIOS) {
        // Uncomment the lines below to avoid default animation
        // UIView.animateWithDurationAnimations(0, () => {
            var indexPaths = NSMutableArray.new();
            indexPaths.addObject(NSIndexPath.indexPathForRowInSection(rowIndex, event.groupIndex));
            listView.ios.reloadItemsAtIndexPaths(indexPaths);
        // });
    }
    if (isAndroid) {
        listView.androidListView.getAdapter().notifyItemChanged(rowIndex);
    }
}

}
