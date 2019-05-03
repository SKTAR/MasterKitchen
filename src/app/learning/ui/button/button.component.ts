import { Component, OnInit, Input } from '@angular/core';
import { IncreaseButtonService } from './increaseButton.service.tns';
import { RoutingHelperService } from '../../../shared/router-helper/routing-helper.service';
//import { RouterExtensions } from 'nativescript-angular/router';
export class TableObj {
  NumberCustomer: number;
  TableID: string;
  PositionX: number;
  PositionY: number;
  constructor(tableID: string,
              positionX: number,
              positionY: number) {
              this.NumberCustomer = 1;
              this.TableID = tableID;
              this.PositionX = positionX;
              this.PositionY = positionY;
  }
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  minVal = 1;
  maxVal = 99;

  @Input() tableObj: TableObj;
 // tableObj: TableObj;

  // birthDate: Date = new Date();
  constructor(private increaseBTService: IncreaseButtonService,
              private routerHelper: RoutingHelperService) {
    // this.tableObj = new TableObj('', 1, 1);
   }

  ngOnInit() {
  }

  public onTapIncrease(arg) {
      if (this.tableObj.NumberCustomer >= this.maxVal) {
        this.tableObj.NumberCustomer = this.maxVal;
      } else {
        this.tableObj.NumberCustomer ++;
      }
     // this.increaseBTService.onTapIncrease(arg);
  }

  public onTapDecrease(arg) {
    if ( this.tableObj.NumberCustomer  <= this.minVal) {
      this.tableObj.NumberCustomer  = this.minVal;
    } else {
      this.tableObj.NumberCustomer --;
    }
    // this.increaseBTService.onTapDecrease(arg);
  }

  loadMenu() {
    this.routerHelper.goToPage('/menu');
   }

   onPan(arg) {
   }

}
