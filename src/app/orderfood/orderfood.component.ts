import { Component, OnInit } from '@angular/core';
// import { OrderTypeService } from '../helper/menucategory/ordertype.service';
// import { KOTService } from '../shared/backend-services/KOT-Service/kot.service';
import { TableObj } from '../learning/ui/button/button.component';
import { SegmentedBarService } from '../shared/ui-services/segmentedbar-service/segmentedbar.service';
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
  orderTypeTabList; // Dine In ,Take Away ....
  menuCategoryList: string[]; // ของดี เมืองอุบล , ต้ม ，ทอด
  selectedIndex = 0;
  
  tableList: TableObj[] = [];
 

  constructor(private orderTabService: SegmentedBarService) {
    this.orderTypeTabList = orderTabService.getOrderTypeTab();
     // this.menuCategoryList = kotService.getMenuCategoryList();
      this.tableList = [
        new TableObj('Table1', 0, 1),
        new TableObj('Table2', 0, 10),
        new TableObj('Table3', 0, 20)
      ];
  }


ngOnInit(): void {
    // Init your component properties here.
}




  onSelectedIndexChange(arg) {
    this.selectedIndex = this.orderTabService.onSelectedIndexChange(arg);
   }

  showMessage() {
    alert('TAP BUTTON');
  }
}


