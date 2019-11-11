import { Component, OnInit } from '@angular/core';
import { RadSideDrawerService } from '../@core/models-services/ui/radside-drawer-service/radsidedrawer.service';
import { AuthGuard } from '../@core/models-services/guard/auth.guard';
import { HomeMenuService } from '../@core/models-services/ui/home-menu/home-menu.service';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { HomeViewModel } from '../@core/models-services/home-view.model';

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

  arrow =  "~/assets/images/icon/arrow.png"
  arrow_white =  "~/assets/images/icon/arrow_white.png"
//endregion
quickNavItems = new ObservableArray([
  {
      icon: "~/assets/images/icon/wifi.png",
      title: "Overview",
      des: 'TEST',
      expanded: false
  },
  {
      icon: "~/assets/images/icon/bluetooth.png",
      title: "Overview",
      des: 'TEST',
      expanded: false
      
      

  },
  {
      icon: "~/assets/images/icon/battery.png",
      title: "Overview",
      des: 'TEST',
      expanded: false
  },
  {
      icon: "~/assets/images/icon/airplane.png",
      title: "Overview",
      des: 'TEST',
      expanded: false
  }
]);

appNavItems = [
  {
      icon: "~/assets/images/icon/home.png",
      title: "Overview"
  },
  {
      icon: "~/assets/images/icon/explore.png",
      title: "Discover"
  },
  {
      icon: "~/assets/images/icon/map.png",
      title: "Maps"
  },
  {
      icon: "~/assets/images/icon/question.png",
      title: "About"
  }
];
private dataItems: any[];
  constructor(private drawerService: RadSideDrawerService,
              private auth: AuthGuard,
              private homeMenuService: HomeMenuService) {

    this.profile = this.username + ' ' + this.position;
 }
 toggleCollapsed(): void {
  this.collapsed = !this.collapsed;
}

    ngOnInit() {
      this.dataItems = [];
      let itemsCount = 10;
      // for (var i = 1; i <= itemsCount; i++) {
      //     this.dataItems.push({
      //         name: "TEST " + i,
      //         icon: "~/assets/images/icon/battery.png",
      //         expanded: false
      //     });
      // }

      // let startcode = 0xf016;
      //  for (var i = 1; i <= itemsCount; i++) {
      //     this.dataItems.push({
      //         name: "TEST " + i,
      //         icon:  String.fromCharCode(startcode+i),
      //         expanded: false
      //     });
         
      // }
   

      const home = new HomeViewModel();
      this.dataItems = home.homeMenuItems;
      console.log(this.dataItems);
      
    }
   
    getSubMenuRow(item:any){
      let rows = "auto,auto";
    if(item != undefined)
    {
      console.log(item);
    
         item.forEach((el)=>{
         rows +=",auto";
        })
    }
        console.log("rows"+ rows);
        return rows;
  }
    
    //#region Web Method
    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }

    onTap(item:any){
     // console.log(item);
     alert("test");
     console.log(item);
    }
    //#endregion
  
    //#region Mobile Method
  
  
  //   pageLoaded(args) {
  //    this.drawerService.pageLoaded(args);
  // }
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

    selected = false;;
    //#region  Test Accordion
    templateSelector(item: any, index: number, items: any): string {
      if(this.selected == false)
      {
          this.selected=true;
      }
      else{
        this.selected=false;
      }
      return item.expanded ? "expanded" : "default";
  }

  onItemTap(arg) {
  
    this.drawerService.onItemTap(arg);
    
  }


  drawerLoaded(arg)
  {
    this.drawerService.load(arg);
  }
    //#endregion








    
}
