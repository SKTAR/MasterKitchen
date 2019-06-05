import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TableObj } from '../../../shared/models/dine-table.model';
import { MenuModel } from '../../../shared/models/menu.model';
import { SegmentedBarService } from '../../../shared/services/ui/segmentedbar-service/segmentedbar.service';
import { RouterHelperService } from '../../../shared/services/router-helper/router-helper.service';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { Image } from 'tns-core-modules/ui/image';
import { KOTService } from '../../../shared/services/restaurant/kot.service';
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
  tableID: string;
  orderFromMenuItemComp: MenuModel[];
  nCustomter = 1; // get From OutPut
  constructor(private segmentedService: SegmentedBarService,
              private routerHelper: RouterHelperService,
              private route: ActivatedRoute,
              private kotService: KOTService
              ) {
              this.route.queryParams.subscribe(params => {
                this.orderFromMenuItemComp = params['menuItems'];
              this.tableID = params['tableID'];
                console.log('pass Data' + this.orderFromMenuItemComp.length);
                console.log('Table' + this.tableID);
            });

            this.orderTypeList = this.kotService.getOrderTypeList();
            console.log('order type:'+this.orderTypeList);
              this.orderTypeSegmentBarList = segmentedService.getSegmentBarTab(this.orderTypeList);
              console.log(this.orderTypeSegmentBarList);
              this.tableList = [
                new TableObj('Table1', 0, 1),
                new TableObj('Table2', 200, 10),
                //new TableObj('Table3', 0, 20)
              ];
  }

  ngOnInit(): void {
  }

  onSelectedIndexChange(arg) { // SELECT TAB
    this.selectedIndex = this.segmentedService.onSelectedIndexChange(arg);
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
          'orderType': this.orderTypeList[this.selectedIndex]
      }
  };

    this.routerHelper.goToPageExtra('/menu', navigationExtras);
   
   }

   
  // console.log(this.dragImageItem.x)
   

  getNumberOfCustomer($event) {
    this.nCustomter = $event;
  }

}
