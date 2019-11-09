import { Injectable } from '@angular/core';
import { RadSideDrawer, DrawerTransitionBase, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';
// import * as app from 'tns-core-modules/application';
import { Router, NavigationEnd } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { filter } from 'rxjs/operators';
import { isIOS, isAndroid } from 'tns-core-modules/platform/platform';
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { Page } from 'tns-core-modules/ui/page/page';
import { EventData } from 'tns-core-modules/data/observable';
import { HomeViewModel} from '../../home-view.model';
declare var UIView, NSMutableArray, NSIndexPath;
// import { Page } from 'tns-core-modules/ui/page';
@Injectable({providedIn: 'root'})
export class HomeMenuService {
    
    public pageLoaded(args: EventData) {
        let page = <Page>args.object;
        page.bindingContext = new HomeViewModel();
    }

}
