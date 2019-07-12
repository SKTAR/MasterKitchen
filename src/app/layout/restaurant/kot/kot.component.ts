import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TableObj } from '../../../shared/models/dine-table.model';
import { MenuModel } from '../../../shared/models/menu.model';
import { SegmentedBarService } from '../../../shared/services/ui/segmentedbar/segmentedbar.service';
import { RouterHelperService } from '../../../shared/services/router-helper/router-helper.service';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { Image } from 'tns-core-modules/ui/image';
import { KOTService } from '../../../shared/services/restaurant/kot.service';
import { KotPassData } from '../../../shared/models/kot.model';

@Component({
  selector: 'app-kot',
  templateUrl: './kot.component.html',
  styleUrls: ['./kot.component.scss']
})
export class KotComponent implements OnInit {

  orderTab ;
  imageDir = '';
  caption;
  dataItems;
   orderTypeList = [];//'Dine In' , 'Take Away' , 'Delivery', 'Others']; // Dine In ,Take Away ....
  orderTypeSegmentBarList; // SegmentBar UI Component List
  menuCategoryList: string[]; // ของดี เมืองอุบล , ต้ม ，ทอด
  selectedIndex = 0;
  tableList: TableObj[] = [];
  prop = 0;
  visibleString = 'visibility';

  @ViewChild('tab') tabBar: ElementRef;
  @ViewChild('dragImage') dragImage: ElementRef;
  prevDeltaX: number;
  prevDeltaY: number;
  // tableID: string;
  orderFromMenuItemComp: MenuModel[];
  nCustomer = 1; // get From OutPut
  isDineInVisible = false;
  isMenuVisible = false;
  kotPassData: KotPassData;
  constructor(private segmentedService: SegmentedBarService,
              private routerHelper: RouterHelperService,
              private route: ActivatedRoute,
              private kotService: KOTService
              ) {
            //   this.route.queryParams.subscribe(params => {
            //     this.orderFromMenuItemComp = params['menuItems'];
            //   this.tableID = params['tableID'];
            //     console.log('pass Data' + this.orderFromMenuItemComp.length);
            //     console.log('Table' + this.tableID);
            // });

            this.orderTypeList = this.kotService.getOrderTypeList();
           // console.log('order type:'+this.orderTypeList);
              this.orderTypeSegmentBarList = segmentedService.getSegmentBarTab(this.orderTypeList);
             // console.log(this.orderTypeSegmentBarList);
              this.tableList = [
                new TableObj('Table1', 50, 50),
                new TableObj('Table2', 350, 50),
                new TableObj('Table3', 650, 50),
                new TableObj('Table4', 1000, 50),
                new TableObj('Table5', 1350, 50),
                
                new TableObj('Table6', 50, 300),
                new TableObj('Table7', 350, 300),
                new TableObj('Table8', 650, 300),
                new TableObj('Table9', 1000, 300),

                new TableObj('Table10', 50, 600),
                new TableObj('Table11', 350, 600),
                new TableObj('Table12', 650, 600),
                new TableObj('Table13', 1000, 600),
              ];
  }

  ngOnInit(): void {
    this.isDineInVisible = true;
    this.kotPassData = new KotPassData();
    this.kotPassData.orderType = this.orderTypeList[0];
  }


  /**
   *   Mobile
   *   Select Tab // Dine In , Take Away ....
   * 
   */
  onSelectedTabChange(arg) {
    this.selectedIndex = this.segmentedService.onSelectedIndexChange(arg);
    if(this.selectedIndex === 0) { // Dine In
      this.isDineInVisible = true;  this.isMenuVisible = false;
    }
    else {
      this.isMenuVisible = true;
      this.kotPassData = new KotPassData();
      this.kotPassData.tableID = '';
      this.kotPassData.numCust = 0;
      this.kotPassData.orderType = this.orderTypeList[this.selectedIndex];
      // alert(this.kotPassData.orderType);
    }
   }


  loadMenu(args) {
     const img = <Image>args.object;
     const table = img.id;
    // alert('id' + table);
  
    this.kotPassData = new KotPassData();
    this.kotPassData.tableID = table;
    this.kotPassData.numCust = this.nCustomer;
    this.kotPassData.orderType = this.orderTypeList[this.selectedIndex];
     //   const navigationExtras: NavigationExtras = {
  //     queryParams: {
  //         'tableID'  : table,
  //         'numCust'  : this.nCustomter,
  //         'orderType': this.orderTypeList[this.selectedIndex]
  //     }
  // };
    this.isDineInVisible = false;
    this.isMenuVisible = true;
  //  this.routerHelper.goToPageExtra('/menu', navigationExtras);
   
   }

   
  // console.log(this.dragImageItem.x)
   

  getNumberOfCustomer($event) {
    this.nCustomer = $event;
  }

}
