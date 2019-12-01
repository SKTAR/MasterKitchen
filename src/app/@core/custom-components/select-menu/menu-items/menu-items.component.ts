import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuModel } from '~/app/@core/models-services/restaurant/menu.model';
import { RadlistviewMenuService } from '~/app/@core/models-services/ui/radlistview-menu-service/radlistview-menu.service';
import { NumuricButtonService } from '~/app/@core/models-services/ui/numuric-button/numuric-button.service';
import { RouterHelperService } from '~/app/@core/models-services/router-helper/router-helper.service';
import { KotModel } from '~/app/@core/models-services/restaurant/kot.model';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {

  img_folder = '~/assets/images/gallery/gallery';

  @Input() menuListByCategory: Array<MenuModel>; //  From MenuComponent
 // @Input() menuName: string;
  @Input() image: string;
  @Input() categorySelected: string;

  @Output() selectedMenu = new EventEmitter<MenuModel[]>(); // emit value to menu component

  seletedMenuItems: MenuModel[] = []; // recieve data when tap on menu
  
  allSelectMenu: Array<MenuModel[]> = [];
  numberPerServing = 1;
  minVal = 1;
  maxVal = 99;

  @Input() tableID: string;
  constructor(private itemService: RadlistviewMenuService,
              private numuricBtService: NumuricButtonService,
              private routerHelper: RouterHelperService) {
                 
  }

  ngOnInit() {
   
  }

  onItemSelected(arg) {
    //alert('menuItem:' + this.tableID);
    this.seletedMenuItems =  this.itemService.onItemSelected(arg);
   // console.log(this.seletedMenuItems);
    this.allSelectMenu.push(this.seletedMenuItems);
    //console.log(this.allSelectMenu.length);

    this.selectedMenu.emit(this.seletedMenuItems);
  }

  onItemDeselected(arg) {
    this.seletedMenuItems =  this.itemService.onItemDeselected(arg);
   // console.log(this.seletedMenuItems);
    this.allSelectMenu.push(this.seletedMenuItems);
   // console.log(this.allSelectMenu.length);
    this.selectedMenu.emit(this.seletedMenuItems);
  }
  public onTapIncrease(args,txtId: string) {
    this.numuricBtService.IncreaseValue(args,txtId);
}

public onTapDecrease(args, txtId: string) {
   this.numuricBtService.DecreaseValue(args, txtId);
}
onTextChange(args) {
   // let textField = <TextField>args.object;
}


placeOrder(kot: KotModel) {
  if(kot != null) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
          'tableID'  : this.tableID,
          'menuItems': this.seletedMenuItems
      }
    };
    
      if(this.routerHelper.canGoBack) {
        this.routerHelper.goToPageExtra('orderfood', navigationExtras);
      }
    
    
    }
  }

}

