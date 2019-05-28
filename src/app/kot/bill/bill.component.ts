import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { NavigationExtras } from '@angular/router';
import { KDS, IKDS } from '../../shared/common-model/kot.model';
import { PlatformService } from '../../shared/platform.service';
import { RoutingHelperService } from '../../shared/router-helper/routing-helper.service';
import { KOTService } from '../../shared/kitchen-services/kot.service';
import { MenuModel } from '../../shared/kitchen-models/menu.model';
import { MenuService } from '../../shared/kitchen-services/menu.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

  //isTablet: boolean = device.deviceType === DeviceType.Tablet;
  isTablet = false;
  data = [];
  selected = {};

menuItem : MenuModel;

page = 'Billing';
orderList: KDS[] = [];
selectedOrder: KDS;
  constructor(private router: RoutingHelperService,
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
          this.router.goToPage('splitbill', navigationExtras);
          }
      }

  ngOnInit(): void {
      this.listOrder();
  }

  getMenubyId(id: string) {
    console.log('get test:'+id);
    return this.menuService.getOne(id).pipe(map((response: MenuModel) => 
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
    this.kotService.getOne(id).pipe(map((response: KDS) =>  {
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
