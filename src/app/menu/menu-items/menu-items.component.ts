import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Menu } from '../../shared/kitchen-models/menu.model';
import { MenuService } from '../../shared/kitchen-services/menu.service';
import { map } from 'rxjs/operators';
import { RadlistviewMenuService } from '../ui-service/radlistview-menu.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {
  

  
  img_folder = '~/assets/images/gallery/gallery';

  @Input() menuListByCategory: Array<Menu>;
  @Input() menuName: string;
  @Input() image: string;
  @Input() categorySelected: string;
 
  @Input() dataItems;
  
  @Output() itemMenu = new EventEmitter<string>();
  constructor(private itemService: RadlistviewMenuService) {
    //  if(this.menuListByCategory != null ) {
    //   this.dataItems = new ObservableArray<Menu>();
    //   this.dataItems = this.getMenuItems();
    //   alert('YES');
    // }
    // else{
    //   alert('NO');
    // }
  //  alert('constructor');
    
  }

  ngOnInit() {
   
  //  alert('on Init');
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
   // alert('after view Init');
  }
  onItemSelected(arg) {
   
     const itemName =  this.itemService.onItemSelected(arg);

      
      // this.itemMenu.emit(itemName);
      // this.dataItems = new ObservableArray<Menu>();
      // this.dataItems = this.itemService.getMenuItems();

      
  }
  onItemDeselected(arg) {
       this.itemService.onItemDeselected(arg);
  }
  public getMenuItems() {
    // for (let item of this.menuListByCategory) {
    //     this.dataItems.push(new Menu(item.partNumber,item.name,item.price));
    //   }

    // console.log('menu item :' + JSON.stringify(this.menuListByCategory));

    //   return this.dataItems;
}
  


}
