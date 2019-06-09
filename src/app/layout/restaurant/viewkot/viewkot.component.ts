import { Component, OnInit } from '@angular/core';
import { MenuModel } from '../../../shared/models/menu.model';
import { KDS, KotModel } from '../../../shared/models/kot.model';
import { RouterHelperService } from '../../../shared/services/router-helper/router-helper.service';
import { PlatformService } from '../../../shared/platform.service';
import { KOTService } from '../../../shared/services/restaurant/kot.service';
import { MenuService } from '../../../shared/services/restaurant/menu.service';
import { NavigationExtras } from '@angular/router';
import { map, filter, flatMap } from 'rxjs/operators';
import { SegmentedBarService } from '../../../shared/services/ui/segmentedbar-service/segmentedbar.service';

@Component({
  selector: 'app-viewkot',
  templateUrl: './viewkot.component.html',
  styleUrls: ['./viewkot.component.scss']
})
export class ViewkotComponent implements OnInit {
  countries: Array<any> = [
    { name: "Amazon", imageSrc: "~/images/amazon.png", open: '+42.87%', type: 'plus' },
    { name: "Netflix", imageSrc: "~/images/netflix.png", open: '+41.06%', type: 'plus' },
    { name: "Apple", imageSrc: "~/images/apple.png", open: '+13.63%', type: 'plus' },
    { name: "Paypal", imageSrc: "~/images/paypal.png", open: '+13.50%', type: 'plus' },
    { name: "Google", imageSrc: "~/images/google.png", open: '+0.51%', type: 'plus' },
    { name: "Spotify", imageSrc: "~/images/spotify.png", open: '-6.99%', type: 'minus' },
    { name: "Tesla", imageSrc: "~/images/tesla.png", open: '+17.19%', type: 'plus' },
    { name: "Facebook", imageSrc: "~/images/facebook.png", open: '-24.86%', type: 'minus' },
    { name: "Bitcoin", imageSrc: "~/images/bitcoin.png", open: '-48.86%', type: 'minus' },
    { name: "Ethereum", imageSrc: "~/images/et.png", open: '-48.86%', type: 'minus' },
    { name: "Aliaba", imageSrc: "~/images/alibaba.png", open: '-21.63%', type: 'minus' },
    { name: "AMD", imageSrc: "~/images/amd.png", open: '+86.63%', type: 'plus' }
];
   //isTablet: boolean = device.deviceType === DeviceType.Tablet;
   isTablet = false;
   data = [];
   selected = {};
   orderTypeSegmentBarList; // SegmentBar UI Component List
   
 menuItem : MenuModel;
 viewKotTabNameList; 
 page = 'Billing';
 orderList: KotModel[] = [];
 selectedOrder: KotModel;
 constructor(private router: RouterHelperService, private checkType: PlatformService,
  private kotService: KOTService,  private menuService: MenuService,  private segmentedService: SegmentedBarService) {
   this.viewKotTabNameList  = this.kotService.getViewKotTabList(); // = ['Show All', 'Dine In' , 'Take Away' , 'Delivery', 'Others']; //
  console.log(this.viewKotTabNameList);
  this.orderTypeSegmentBarList = segmentedService.getSegmentBarTab(this.viewKotTabNameList);

}
  ngOnInit(): void {
  this.listAllOrder();
  this.onSelectKotItem(Event);
  }
 
   //#region Mobile
   onSelectedSegment(args) { // select Tab
    const tabIndex = this.segmentedService.onSelectedIndexChange(args);
    //alert(tabIndex);
   //const temp = this.listAllOrder();
    if (tabIndex === 0) { // Show All
      this.listAllOrder();
    }
    if (tabIndex === 1) { // Dine In
      
      for (let key in this.orderList) {
        
      }
     
    
    }
    if (tabIndex === 2) { // Take Away
      this.orderList =[];
    
    }
    if (tabIndex === 3) { // Delivery
      this.orderList =[];
    }
    if (tabIndex === 4) { // Others
      this.orderList =[];
    }
   }
  //#endregion


   
  onSelectKotItem(args) { // select Kitchen Order Token
    this.selectedOrder = new KotModel();
    
    this.selectedOrder = this.orderList[args.index];
      console.log('--------------------------------------');
      console.log(this.selectedOrder);
     // alert(this.selectedOrder['subTotal']);
     
      // For phone users we need to navigate to another page to show the detail view.
      if (!this.isTablet) {

        const navigationExtras: NavigationExtras = {
          queryParams: { selected: JSON.stringify(this.selected)}
        };
          this.router.goToPage('splitview-kot', navigationExtras);
          }
      }
 
 
   onLoaded(args) {
    this.checkType.checkPlatformType(args);
    this.isTablet = this.checkType.checkIsTablet();
    console.log('Is Table true or false' + this.isTablet);

    this.selectedOrder = new KotModel();
    if (!this.isTablet) {
 
      const navigationExtras: NavigationExtras = {
        queryParams: { selected: JSON.stringify(this.selected)}
      };
        this.router.goToPage('splitview-kot', navigationExtras);
        }
   }
   getMenubyId(id: string) {
     console.log('get test:'+ id);
     return this.menuService.getByUid(id).pipe(map(
       (response: MenuModel) => 
       { response.name;
     console.log(response);}
     ));
    
   
 
    // return this.http.get('server/page/auth').map(res => res.message === 'success');
   }
   getName() {
     return 'test';
   }
 
   listAllOrder() {
     this.kotService.list().pipe(map((response: KotModel[]) =>  {
       return this.orderList = response;
     }))
     .subscribe((response) => {
       console.log('Order List');
       console.log(response);
 
 },
 error => {
     alert('Cannot get Order List' + error);
     console.log(error);
  });
   }
   
   


   selectOrderItem(args){
     const id = args.index;
     const kdsItem = this.orderList[id];
     // kdsItem['subTotal'];
 
     alert('id:' + id);
     this.kotService.getByUid(id).pipe(map((response: KotModel) =>  {
       return this.selectedOrder = response;
     }))
     .subscribe((response) => {
       console.log('Selected Order:');
       console.log(response);
 
 },
 error => {
     alert('Cannot get Order List' + error);
     console.log(error);
  });
   }
 

}
