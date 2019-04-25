import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ButtonComponent, TableObj } from '../learning/ui/button/button.component';
import { MenuService } from '../shared/kitchen-services/menu.service';
// import { MenuService } from '../helper/menucategory/menu.service';
// import { MenuItemsService } from '../helper/menuitems/menu-items.service';


@Component({
 // providers: [MenuService],
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {
 
  dataItems;
  page = 'Menu';
  menutab ;
  imageDir = '';
  caption;
  selectedBarIndex = 0;
  tableList: TableObj[] = [];
  @ViewChildren('table') userdetail: QueryList<ButtonComponent>;
  private btComp: ButtonComponent;
  ngAfterViewInit(): void {
  }

  constructor(private menuService: MenuService)
  {
     menuService.listCategories()
    .subscribe({
      next(response) { console.log('next' + response); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });

    this.tableList = [
      new TableObj('Table1', 0, 1),
      new TableObj('Table2', 0, 10),
      new TableObj('Table3', 0, 20)
    ];
  }

  ngOnInit() {
   //  this.dataItems = this.menuItemService.getMenuItems();
  }

  onSelectedIndexChange(arg) {
   // this.caption = this.menuService.onSelectedIndexChange(arg);
  }


  onCategorySelected(arg) {
    //   this.itemService.onItemSelected(arg);
  }
  onCategoryDeselected(arg) {
    //   this.itemService.onItemDeselected(arg);
  }


}
