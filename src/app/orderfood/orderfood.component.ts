import { Component, OnInit } from '@angular/core';
// import { OrderTypeService } from '../helper/menucategory/ordertype.service';
import { KOTService } from '../shared/backend-services/KOT-Service/kot.service';
// import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';

@Component({
 // providers: [OrderTypeService],
  selector: 'app-orderfood',
  templateUrl: './orderfood.component.html',
  styleUrls: ['./orderfood.component.scss']
})
export class OrderfoodComponent implements OnInit {
  page = 'Order Food';
  orderTab ;
  imageDir = '';
  caption;
  dataItems;
  orderTypeTabList: string[]; // Dine In ,Take Away ....
  menuCategoryList: string[]; // ของดี เมืองอุบล , ต้ม ，ทอด
  selectedBarIndex = 0;
  constructor(private kotService: KOTService) {
      this.orderTypeTabList = kotService.getOrderTypeList();
      this.menuCategoryList = kotService.getMenuCategoryList();
  }


ngOnInit(): void {
    // Init your component properties here.
}




  onSelectedIndexChange(arg) {
   // this.caption = this.oService.onSelectedIndexChange(arg);
   }

  showMessage() {
    alert('TAP BUTTON');
  }
}


