import { Component, OnInit } from '@angular/core';
import { RadSideDrawerService } from '../@core/models-services/ui/radside-drawer-service/radsidedrawer.service';
import { AuthGuard } from '../@core/models-services/guard/auth.guard';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  collapedSideBar: boolean; // web 
 //#region Mobile
  collapsed = true;
  username  = 'Surasak Kaewsiri';
  position  = 'Owner';
  profile   = '';
  email     = 'surasak.kaewsiri@gmail.com';
  private _activatedUrl: string;
//endregion

private dataItems: any[];
  constructor(private drawerService: RadSideDrawerService,
              private auth: AuthGuard) {

    this.profile = this.username + ' ' + this.position;
 }
 toggleCollapsed(): void {
  this.collapsed = !this.collapsed;
}

    ngOnInit() {
      this.dataItems = [];
      let itemsCount = 10;
      for (var i = 1; i <= itemsCount; i++) {
          this.dataItems.push({
              name: "Item1",
              icon: "&#xf016;",
              path: "/ordering",
              expanded: false
          });
      }
   
    }
   
    
    //#region Web Method
    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
    //#endregion
  
    //#region Mobile Method
    drawerLoaded(args) {
     
      this.drawerService.load(args);
    }
  

    onNavItemTap(navItemRout: string) {
    
      if (navItemRout === "login") {
      this.auth.onLoggedout();
      }
      this.drawerService.onNavItemTap(navItemRout);
      
      }
  
    isComponentSelected(url: string) {
      this.drawerService.isComponentSelected(url);
    }
    //#endregion


    //#region  Test Accordion
    templateSelector(item: any, index: number, items: any): string {
      return item.expanded ? "expanded" : "default";
  }

  onItemTap(arg) {
    this.drawerService.onItemTap(arg);
  }
    //#endregion
}
