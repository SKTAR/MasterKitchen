import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ButtonComponent, TableObj } from '../learning/ui/button/button.component';
import { MenuService } from '../shared/kitchen-services/menu.service';
import { Menu } from '../shared/kitchen-models/menu';
// import { MenuService } from '../helper/menucategory/menu.service';
// import { MenuItemsService } from '../helper/menuitems/menu-items.service';


@Component({
 // providers: [MenuService],
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {
 
  menuList = new Array<Menu>(); //
  categoryList;

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
    //  menuService.listCategories()
    // .subscribe({
    //   next(response) { this.console.log('next' + response); },
    //   error(err) { console.error('Error: ' + err); },
    //   complete() { console.log('Completed'); }
    // });

    

    this.tableList = [
      new TableObj('Table1', 0, 1),
      new TableObj('Table2', 0, 10),
      new TableObj('Table3', 0, 20)
    ];

  }

  ngOnInit() {
   //  this.dataItems = this.menuItemService.getMenuItems();
   this.menuService.listCategories()
    .subscribe((response) => {
        this.categoryList = response;
        console.log(this.categoryList);
      },
      error => {
        alert('Cannot get Menu Category' + error);
        console.log(error);
      });
  }

  onSelectedIndexChange(arg) {
   // this.caption = this.menuService.onSelectedIndexChange(arg);
  }


  onCategorySelected(arg,category: string) {
    //   this.itemService.onItemSelected(arg);
    this.menuService.listMenuByCategory(category).subscribe(response =>
      {
          this.menuList = response.map(item =>
            {
                return new Menu(
                  item.partNumber,
                  item.name,
                  item.price
                );
            });
        });

  }
  onCategoryDeselected(arg) {
    //   this.itemService.onItemDeselected(arg);
  }


}
