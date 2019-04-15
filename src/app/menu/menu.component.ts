import { Component, OnInit, Input } from '@angular/core';
// import { MenuService } from '../helper/menucategory/menu.service';
// import { MenuItemsService } from '../helper/menuitems/menu-items.service';


@Component({
 // providers: [MenuService],
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dataItems;
  page = 'Menu';
  menutab ;
  imageDir = '';
  caption;
  selectedBarIndex = 0;
  constructor() { // (private menuService: MenuService,
    // private menuItemService: MenuItemsService) {
    // this.menutab = menuService.getMenuTab();
  }


  ngOnInit() {
   //  this.dataItems = this.menuItemService.getMenuItems();
  }

  onSelectedIndexChange(arg) {
   // this.caption = this.menuService.onSelectedIndexChange(arg);
  }


  onItemSelected(arg) {
    //   this.menuItemService.onItemSelected(arg);
  }
  onItemDeselected(arg) {
    //   this.menuItemService.onItemDeselected(arg);
  }


}
