import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TableObj } from '../shared/common-model/dine-table.model';
import { MenuModel } from '../shared/kitchen-models/menu.model';
import { SegmentedBarService } from '../shared/ui-services/segmentedbar-service/segmentedbar.service';
import { RoutingHelperService } from '../shared/router-helper/routing-helper.service';
import { ActivatedRoute } from '@angular/router';
import { NumuricButtonService } from '../shared/ui/numuric-button/numuric-button.service';
import { KOTService } from '../shared/kitchen-services/kot.service';
import { KDS } from '../shared/common-model/kot.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-kot',
  templateUrl: './kot.component.html',
  styleUrls: ['./kot.component.scss']
})
export class KotComponent implements OnInit {

  page = 'Kitchen Order Ticket';
  orderTypeTabList = ['Show All', 'Dine In' , 'Take Away' , 'Delivery', 'Others']; // Dine In ,Take Away ....
  orderTypeSegmentBarList; // SegmentBar UI Component List
  selectedIndex = 0;
  visibleString = 'visibility';
  @ViewChild('tab') tabBar: ElementRef;
  isTablet = false;



  orderList: KDS[] = [];
  constructor(private segmentedService: SegmentedBarService,
              private routerHelper: RoutingHelperService,
              private route: ActivatedRoute,
              private kotService: KOTService) {
            //   this.route.queryParams.subscribe(params => {
            //     this.orderFromMenuItemComp = params['menuItems'];
            //   this.tableID = params['tableID'];
            //     console.log('pass Data' + this.orderFromMenuItemComp.length);
            //     console.log('Table' + this.tableID);
            // });
      this.orderTypeSegmentBarList = segmentedService.getSegmentBarTab(this.orderTypeTabList);

  }

  ngOnInit() {

  }
  select(args) {
  }

  onSelectedIndexChange(arg) { // SELECT TAB
    this.selectedIndex = this.segmentedService.onSelectedIndexChange(arg);
   }

  showMessage() {
    alert('TAP BUTTON');
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

}
