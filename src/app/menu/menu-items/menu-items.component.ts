import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Menu } from '../../shared/kitchen-models/menu.model';
import { MenuService } from '../../shared/kitchen-services/menu.service';
import { map } from 'rxjs/operators';
import { RadlistviewMenuService } from '../ui-service/radlistview-menu.service';
import { NumuricButtonService } from '../../shared/ui/numuric-button/numuric-button.service';
import { RoutingHelperService } from '../../shared/router-helper/routing-helper.service';
import { KOT } from '../../shared/common-model/kot.model';


interface SelectedMenu {
  [menuName: string]: Array<Menu>;
} 

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {


  yourVar: Map<string, Menu[]>;
   
  img_folder = '~/assets/images/gallery/gallery';

  @Input() menuListByCategory: Array<Menu>;
  @Input() menuName: string;
  @Input() image: string;
  @Input() categorySelected: string;
 
  @Input() dataItems;
  
  //@Output() itemMenu = new EventEmitter<string>();

  @Output() selectedMenu = new EventEmitter<Menu[]>();

   orderKot: KOT;
   // kotItems: OrderMenuItems[] ;

  seletedMenuItems: Menu[] =[];
  numberPerServing = 1;
  minVal = 1;
  maxVal = 99;
  constructor(private itemService: RadlistviewMenuService
              ,private numuricBtService: NumuricButtonService
              ,private routerHelper: RoutingHelperService) {
    
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
  
  
    this.seletedMenuItems =  this.itemService.onItemSelected(arg);
  //  this.orderMenuSelected.push('')
   // this.yourVar.set(this.menuName,selectedItem);
   
      // this.itemMenu.emit(itemName);
      // this.dataItems = new ObservableArray<Menu>();
      // this.dataItems = this.itemService.getMenuItems();



      
  }
  onItemDeselected(arg) {
    this.seletedMenuItems =  this.itemService.onItemDeselected(arg);
    // this.yourVar.set(this.menuName,selectedItem);
     
  }
  
  
  public onTapIncrease(args) {
    // if (this.tableObj.NumberOfCustomer >= this.maxVal) {
    //   this.tableObj.NumberOfCustomer = this.maxVal;
    // } else {
    //   this.tableObj.NumberOfCustomer ++;
    // }


    alert('Tap Increse Button');
    this.numuricBtService.onTapIncrease(args);

    // if (this.numberPerServing >= this.maxVal) {
    //   this.numberPerServing = this.maxVal;
    // } else {
    //   this.numberPerServing ++;
    // }
   // this.increaseBTService.onTapIncrease(arg);
}

public onTapDecrease(args) {

  alert('Tap Increse Button');
   this.numuricBtService.onTapDecrease(args);
}
onTextChange(args) {
   // let textField = <TextField>args.object;
  // console.log("onTextChange");
 //  alert('id:'+textField.id);

}

public confirm() {
  this.selectedMenu.emit(this.seletedMenuItems);
  if(this.routerHelper.canGoBack) {
      this.routerHelper.onGoBack();
  }

  const kot = new KOT();
  kot.customerName = 'Tar';
  kot.customerNumber = 3;
  kot.shipTo = 'table3';// table3
  kot.contactName = 'Tar'; ; 
  kot.saleName  = 'staff1';
  kot.status  = 'OPEN'; // 'OPEN'
  kot.type = 'DineIn'  // Dine In
  kot.orderNumber = 'Order0001'; //'Order0001',
  kot.paymentTerm = ''; // string;// "CASH",
  kot.deliveryTime = 0; //30,
  kot.deliveryUnit = 'Minute';//"Minute",
  kot.validDate = new Date();// Date //"2019-03-19T13:43:21.270Z",

//   export class KOT  { //Kitchen Order Token {
//     customerName: string;
//     customerNumber: number;
//     shipTo: string; // table3
//     contactName: string; 
//     saleName: string;
//     status: string; // 'OPEN'
//     type: string;  // Dine In
//     orderNumber: string;//'Order0001',
//     paymentTerm: string;// "CASH",
//     deliveryTime: number; //30,
//     deliveryUnit: string;//"Minute",
//     validDate: Date //"2019-03-19T13:43:21.270Z",
//     items: MenuItems[];
// }


// export class MenuItems {
//   'partNumber': string; //'p0001',
//   'name': string;      //'ลอดช่องกะทิสด',
//   'unitPrice': number;  // 100;
//   'quantity': number;  //4,
//   'total': number;    //400
// }


 // orderKot = new KOT('0001',OrderType.DineIn,'S001','Table1',)


}
public cancle() {
}

}
