import { KotModel } from '../../../../shared/models/kot.model';
import { MenuModel } from '../../../../shared/models/menu.model';
import { RadlistviewMenuService } from '../../../../shared/services/ui/radlistview-menu-service/radlistview-menu.service';
import { NumuricButtonService } from '../../../../shared/modules/mobile/components/numric-button/numuric-button.service';
import { RouterHelperService } from '../../../../shared/services/router-helper/router-helper.service';
import { NavigationExtras } from '@angular/router';
import { Input, EventEmitter, Output, OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-menuitems',
  templateUrl: './menuitems.component.html',
  styleUrls: ['./menuitems.component.scss']
})
export class MenuitemsComponent implements OnInit {

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
