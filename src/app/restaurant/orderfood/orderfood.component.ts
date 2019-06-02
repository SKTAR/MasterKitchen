import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TableObj } from '../../shared/models/dine-table.model';
import { MenuModel } from '../../shared/models/menu.model';
import { SegmentedBarService } from '../../shared/ui-services/segmentedbar-service/segmentedbar.service';
import { RoutingHelperService } from '../../shared/router-helper/routing-helper.service';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { Image } from 'tns-core-modules/ui/image';
import { GestureEventData, PanGestureEventData, RotationGestureEventData,
  PinchGestureEventData, SwipeGestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { View } from 'tns-core-modules/ui/core/view/view';
@Component({
  selector: 'app-orderfood',
  templateUrl: './orderfood.component.html',
  styleUrls: ['./orderfood.component.scss']
})
export class OrderfoodComponent implements OnInit {

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
  @ViewChild('dragImage') dragImage: ElementRef;
  dragImageItem: View;
   prevDeltaX: number;
  prevDeltaY: number;
  tableID: string;
  orderFromMenuItemComp: MenuModel[];
  nCustomter = 1; // get From OutPut
  constructor(private segmentedService: SegmentedBarService,
              private routerHelper: RoutingHelperService,
              private route: ActivatedRoute,
              ) {
              this.route.queryParams.subscribe(params => {
                this.orderFromMenuItemComp = params['menuItems'];
              this.tableID = params['tableID'];
                console.log('pass Data' + this.orderFromMenuItemComp.length);
                console.log('Table' + this.tableID);
            });

              this.orderTypeSegmentBarList = segmentedService.getSegmentBarTab(this.orderTypeTabList);
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
          'orderType': this.orderTypeTabList[this.selectedIndex]
      }
  };

    this.routerHelper.goToPageExtra('menulist', navigationExtras);
   
   }

   onPan(args: PanGestureEventData) {
     // console.log("Pana: [" + args.deltaX + ", " + args.deltaY + "] state: " + args.state);
     this.dragImageItem = this.dragImage.nativeElement;
   
    // console.log("Pana: [" + args.deltaX + ", " + args.deltaY + "] state: " + args.state);
    if (args.state === 1) {// down
      this.prevDeltaX = 0;
      this.prevDeltaY = 0;
      console.log('down:' + this.dragImageItem.translateX , this.dragImageItem.translateY);
    } else if (args.state === 2) {
      this.dragImageItem.translateX += args.deltaX - this.prevDeltaX;
      this.dragImageItem.translateY += args.deltaY - this.prevDeltaY;


      this.prevDeltaX = args.deltaX;
      this.prevDeltaY = args.deltaY;

  // calculate the conversion from DP to pixels
    /* this.imgWidth = Number(this.dragImageItem.width);
      this.convFactor = (Number(this.dragImageItem.width) / this.dragImageItem.getMeasuredWidth());
      this.edgeX = (this.itemContainer.getMeasuredWidth() - this.dragImageItem.getMeasuredWidth()) * this.convFactor;
      this.edgeY = (this.itemContainer.getMeasuredHeight() - this.dragImageItem.getMeasuredHeight()) * this.convFactor;      
    */


      // X border
      if (this.dragImageItem.translateX < 0) {
      this.dragImageItem.translateX = 0;
    }
    /* else if (this.dragImageItem.translateX > this.edgeX) {
    //  this.dragImageItem.translateX = this.edgeX;
    }*/

    // Y border
    if (this.dragImageItem.translateY < 0) {
      this.dragImageItem.translateY = 0;
    }
    /* else if (this.dragImageItem.translateY > this.edgeY) {
    //  this.dragImageItem.translateY = this.edgeY;
      }*/
    } else if (args.state === 3) { // up
      // console.log('3:' + args.deltaX,args.deltaY);
      console.log('Up :' + this.dragImageItem.translateX , this.dragImageItem.translateY);
    }


  // console.log(this.dragImageItem.x)
   }

  getNumberOfCustomer($event) {
    this.nCustomter = $event;
  }
}
