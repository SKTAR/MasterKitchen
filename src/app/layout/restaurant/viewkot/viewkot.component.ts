import { Component, OnInit } from '@angular/core';
import { MenuModel } from '../../../shared/models/menu.model';
import { KDS } from '../../../shared/models/kot.model';
import { RouterHelperService } from '../../../shared/services/router-helper/router-helper.service';
import { PlatformService } from '../../../shared/platform.service';
import { KOTService } from '../../../shared/services/restaurant/kot.service';
import { MenuService } from '../../../shared/services/restaurant/menu.service';
import { NavigationExtras } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-viewkot',
  templateUrl: './viewkot.component.html',
  styleUrls: ['./viewkot.component.scss']
})
export class ViewkotComponent implements OnInit {

   //isTablet: boolean = device.deviceType === DeviceType.Tablet;
   isTablet = false;
   data = [];
   selected = {};
 
 menuItem : MenuModel;
 
 page = 'Billing';
 orderList: KDS[] = [];
 selectedOrder: KDS;
   constructor(private router: RouterHelperService,
               private checkType: PlatformService,
               private kotService: KOTService,
               private menuService: MenuService) {}
 
   select(args) {
     this.selectedOrder = new KDS();
     
     this.selectedOrder = this.orderList[args.index];
       console.log('--------------------------------------');
       console.log(this.selectedOrder);
      // alert(this.selectedOrder['subTotal']);
      
       this.checkType.checkPlatformType(args);
       this.isTablet = this.checkType.checkIsTablet();
       console.log('Is Table true or false' + this.isTablet);
       // For phone users we need to navigate to another page to show the detail view.
       if (!this.isTablet) {
 
         const navigationExtras: NavigationExtras = {
           queryParams: { selected: JSON.stringify(this.selected)}
         };
           this.router.goToPage('splitview-kot', navigationExtras);
           }
       }
 
   ngOnInit(): void {
       this.listOrder();
   }
 
   getMenubyId(id: string) {
     console.log('get test:'+id);
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
 
   listOrder() {
     this.kotService.list().pipe(map((response: KDS[]) =>  {
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
     this.kotService.getByUid(id).pipe(map((response: KDS) =>  {
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
