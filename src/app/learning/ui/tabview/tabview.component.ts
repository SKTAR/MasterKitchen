import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../shared/kitchen-models/menu.model';

@Component({
  selector: 'app-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.scss']
})
export class TabviewComponent implements OnInit {
  menuListByCategory:Array<Menu>;
  constructor() { }

  ngOnInit() {
    // this.menuCategoryListItems = [];
    //         for (let i = 0; i < this.menuCategoryList.length; i++) {
    //             const item = new SegmentedBarItem();
    //             item.title = this.menuCategoryList[i];
    //             this.menuCategoryListItems.push(item);
    //         }
    //        return this.menuCategoryListItems;
  }
//#region Tab Select Event 
    // onCategorySelected(arg) {
    //   const index =  this.tabViewService.onSelectedIndexChanged(arg);
    // this.loadMenu(this.menuCategoryList[index]);
    //  console.log(this.menuListByCategory);
    // alert(this.menuCategoryList[index]);
    // }



    // onCategoryDeselected(arg) {
    //      this.itemService.onItemDeselected(arg);
    // }
//#endregion
}
