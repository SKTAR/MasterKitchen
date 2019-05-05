import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// import { OrderTypeService } from '../helper/menucategory/ordertype.service';
// import { KOTService } from '../shared/backend-services/KOT-Service/kot.service';

import { SegmentedBarService } from '../shared/ui-services/segmentedbar-service/segmentedbar.service';
import { RoutingHelperService } from '../shared/router-helper/routing-helper.service';
import { TableObj } from '../shared/common-model/dine-table.model';
import { KOT, OrderType } from '../shared/common-model/kot.model';
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
  orderTypeTabList = ['Dine In' , 'Take Away' , 'Delivery', 'Others']; // Dine In ,Take Away ....
  orderTypeSegmentBarList; // SegmentBar UI Component List
  menuCategoryList: string[]; // ของดี เมืองอุบล , ต้ม ，ทอด
  selectedIndex = 0;
  
  tableList: TableObj[] = [];
 prop = 0;
  visibleString = 'visibility';
 
  @ViewChild('tab') tabBar: ElementRef;
  constructor(private segmentedService: SegmentedBarService,
              private routerHelper: RoutingHelperService) {
    
    this.orderTypeSegmentBarList = segmentedService.getSegmentBarTab(this.orderTypeTabList);
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
ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.

//  this.segmentedService.onLoad(this.tabBar);
  
}




  onSelectedIndexChange(arg) {
    this.selectedIndex = this.segmentedService.onSelectedIndexChange(arg);

     //alert(this.orderTypeSegmentBarList[this.selectedIndex]);
    //this.segmentedService.generateView(arg,this.selectedIndex);
   }

  showMessage() {
    alert('TAP BUTTON');
  }

  loadMenu(table: TableObj) {
  
    this.routerHelper.goToPage('/menu');
   }

   onPan(arg) {
   }

}


