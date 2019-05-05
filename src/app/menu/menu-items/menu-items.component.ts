import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Menu } from '../../shared/kitchen-models/menu.model';
import { MenuService } from '../../shared/kitchen-services/menu.service';
import { map } from 'rxjs/operators';
import { RadlistviewMenuService } from '../ui-service/radlistview-menu.service';
import { TextField } from "tns-core-modules/ui/text-field";
import { NumuricButtonService } from '../../shared/ui/numuric-button/numuric-button.service';
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

  @Output() selectedMenu = new EventEmitter<string>();

  numberPerServing = 1;
  minVal = 1;
  maxVal = 99;
  constructor(private itemService: RadlistviewMenuService
              ,private numuricBtService: NumuricButtonService) {
    
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
  let textField = <TextField>args.object;
  console.log("onTextChange");
  alert('id:'+textField.id);

}
}
