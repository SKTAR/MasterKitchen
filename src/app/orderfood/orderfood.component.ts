import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SegmentedBarService } from '../shared/ui-services/segmentedbar-service/segmentedbar.service';
import { RoutingHelperService } from '../shared/router-helper/routing-helper.service';
import { TableObj } from '../shared/common-model/dine-table.model';
import { KOT, OrderType } from '../shared/common-model/kot.model';
import { MenuModel } from '../shared/kitchen-models/menu.model';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
// import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Image } from 'tns-core-modules/ui/image';
import { NumuricButtonService } from '../shared/ui/numuric-button/numuric-button.service';
import { KOTService } from '../shared/kitchen-services/kot.service';
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
  tableID: string;
  orderFromMenuItemComp: MenuModel[];
  nCustomter = 1; // get From OutPut
  constructor(private segmentedService: SegmentedBarService,
              private routerHelper: RoutingHelperService,
              private route: ActivatedRoute,
              private numuricService: NumuricButtonService
              ) {
              //   this.route.parent.url.subscribe(url => console.log('path from' + url[0].path));
              //   this.route.params
              // .forEach(params => {
              //   // this.id = this.route.snapshot.params['id'];
              //   const data = this.route.snapshot.params.menu;
              //   console.log(JSON.stringify(data));
              // });
              this.route.queryParams.subscribe(params => {
                this.orderFromMenuItemComp = params['menuItems'];
              this.tableID = params['tableID'];
                console.log('pass Data' + this.orderFromMenuItemComp.length);
                console.log('Table' + this.tableID);
            });
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




  onSelectedIndexChange(arg) { // SELECT TAB
    this.selectedIndex = this.segmentedService.onSelectedIndexChange(arg);

     //alert(this.orderTypeSegmentBarList[this.selectedIndex]);
    //this.segmentedService.generateView(arg,this.selectedIndex);
   }

  showMessage() {
    alert('TAP BUTTON');
  }

  loadMenu(args) {
    // alert();
     const img = <Image>args.object;
     const table = img.id;
     alert('id' + img.id);
    const navigationExtras: NavigationExtras = {
      queryParams: {
          'tableID'  : table,
          'numCust'  : this.nCustomter,
          'orderType': this.orderTypeTabList[this.selectedIndex]
      }
  };
  // const number = this.numuricService.getNumberCustomer(args,table);
  // alert('custNumber:' + this.nCustomter);
  
    this.routerHelper.goToPageExtra('menu', navigationExtras);
   
   }

   onPan(arg) {
   }

  getNumberOfCustomer($event) {
    this.nCustomter = $event;
    
  }
  
  

}


