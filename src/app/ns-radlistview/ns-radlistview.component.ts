import { Component, OnInit } from '@angular/core';
// import { MenuItemsService } from '../helper/menuitems/menu-items.service';

@Component({
  selector: 'app-ns-radlistview',
  templateUrl: './ns-radlistview.component.html',
  styleUrls: ['./ns-radlistview.component.scss']
})
export class NsRadlistviewComponent implements OnInit {

  dataItems;
  constructor() {
  } // (private menuItemService: MenuItemsService ) { }

  ngOnInit() {
    // this.dataItems = this.menuItemService.getMenuItems();
  }

  onItemSelected(arg) {
    //   this.menuItemService.onItemSelected(arg);
  }
  onItemDeselected(arg) {
    //   this.menuItemService.onItemDeselected(arg);
  }
}
