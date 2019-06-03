import { Component, OnInit } from '@angular/core';
import { RadSideDrawerService } from '../shared/ui-services/radside-drawer-service/radsidedrawer.service';

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
  constructor(private drawerService: RadSideDrawerService) {

    this.profile = this.username + ' ' + this.position;
 }
 toggleCollapsed(): void {
  this.collapsed = !this.collapsed;
}

    ngOnInit() {
      
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
      this.drawerService.onNavItemTap(navItemRout);
      }
  
    isComponentSelected(url: string) {
      this.drawerService.isComponentSelected(url);
    }
    //#endregion

}
