import { Injectable } from '@angular/core';
import { RadSideDrawer, DrawerTransitionBase, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { Router, NavigationEnd } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { filter } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class RadSideDrawerService {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private router: Router, private routerExtensions: RouterExtensions) {
    }

    public show() {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  public hide() {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.closeDrawer();
  }

 public load() {
      this._activatedUrl = '/home';
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

      const sideDrawer = <RadSideDrawer>app.getRootView();
      sideDrawer.closeDrawer();
  }

}
