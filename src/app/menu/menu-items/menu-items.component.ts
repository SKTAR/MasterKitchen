import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuModel } from '../../shared/kitchen-models/menu.model';
import { MenuService } from '../../shared/kitchen-services/menu.service';
import { map } from 'rxjs/operators';
import { RadlistviewMenuService } from '../ui-service/radlistview-menu.service';
import { NumuricButtonService } from '../../shared/ui/numuric-button/numuric-button.service';
import { RoutingHelperService } from '../../shared/router-helper/routing-helper.service';
import { KOT, MenuItems } from '../../shared/common-model/kot.model';
import { NavigationExtras } from '@angular/router';


interface SelectedMenu {
  [menuName: string]: Array<MenuModel>;
} 

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {


  img_folder = '~/assets/images/gallery/gallery';

  @Input() menuListByCategory: Array<MenuModel>; //  From MenuComponent
  @Input() menuName: string;
  @Input() image: string;
  @Input() categorySelected: string;

  @Output() selectedMenu = new EventEmitter<MenuModel[]>(); // emit value to menu component

  seletedMenuItems: MenuModel[] = []; // recieve data when tap on menu
  numberPerServing = 1;
  minVal = 1;
  maxVal = 99;

  @Input() tableID: string;
  constructor(private itemService: RadlistviewMenuService,
              private numuricBtService: NumuricButtonService,
              private routerHelper: RoutingHelperService) {
                 
  }

  ngOnInit() {
   
  }

  onItemSelected(arg) {
    alert('menuItem:' + this.tableID);
    this.seletedMenuItems =  this.itemService.onItemSelected(arg);
  }

  onItemDeselected(arg) {
    this.seletedMenuItems =  this.itemService.onItemDeselected(arg);
  }
  public onTapIncrease(args, txtId: string) {
    this.numuricBtService.IncreaseValue(args, txtId);
}

public onTapDecrease(args, txtId: string) {
   this.numuricBtService.DecreaseValue(args, txtId);
}
onTextChange(args) {
   // let textField = <TextField>args.object;
}

public confirm() {
  this.selectedMenu.emit(this.seletedMenuItems);

 // const data = { 'menu': this.selectedMenu };

  const navigationExtras: NavigationExtras = {
    queryParams: {
        'tableID'  : this.tableID,
        'menuItems': this.seletedMenuItems
    }
};


const items2: MenuItems[] = 
[{
	'partNumber'  : '011',
	'name'        : 'ข้าวผัด',
	'unitPrice'   : 100,
	'quantity'    : 2,  //4,
	'total'       : 200

}];


const kot = new KOT();
kot.customerName = '';
kot.customerNumber = 3;
kot.shipTo = 'table3';// table3
kot.contactName = 'Tar'; ; 
kot.saleName  = 'staff1';
kot.status  = 'OPEN'; // 'OPEN'
kot.type = 'DineIn';  // Dine In
kot.orderNumber = 'Order0001'; //'Order0001',
kot.paymentTerm = ''; // string;// 'CASH',
kot.deliveryTime = 0; //30,
kot.deliveryUnit = 'Minute';//'Minute',
kot.validDate = new Date();// Date //'2019-03-19T13:43:21.270Z',

kot.items = items2;

console.log(JSON.stringify(kot));




  if(this.routerHelper.canGoBack) {
    this.routerHelper.goToPageExtra('orderfood', '', navigationExtras);
  }
}
public cancle() {
}

}
