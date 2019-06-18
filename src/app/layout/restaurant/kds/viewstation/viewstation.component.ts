import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { KDS } from '../../../../shared/models/kot.model';
import { SegmentedBarService } from '../../../../shared/services/ui/segmentedbar/segmentedbar.service';
import { ActivatedRoute } from '@angular/router';
import { KOTService } from '../../../../shared/services/restaurant/kot.service';
import { RouterHelperService } from '../../../../shared/services/router-helper/router-helper.service';

@Component({
  selector: 'app-viewstation',
  templateUrl: './viewstation.component.html',
  styleUrls: ['./viewstation.component.scss']
})
export class ViewstationComponent implements OnInit {

  page = 'Kitchen Order Ticket';
  orderTypeTabList = ['Show All', 'Dine In' , 'Take Away' , 'Delivery', 'Others']; // Dine In ,Take Away ....
  orderTypeSegmentBarList; // SegmentBar UI Component List
  selectedIndex = 0;
  visibleString = 'visibility';
  @ViewChild('tab') tabBar: ElementRef;
  isTablet = false;



  orderList: KDS[] = [];
  constructor(private segmentedService: SegmentedBarService,
              private routerHelper: RouterHelperService,
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
