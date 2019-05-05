import { Component, OnInit, Input } from '@angular/core';
import { TableObj } from '../../common-model/dine-table.model';
import { RoutingHelperService } from '../../router-helper/routing-helper.service';

@Component({
  selector: 'app-numuric-button',
  templateUrl: './numuric-button.component.html',
  styleUrls: ['./numuric-button.component.scss']
})
export class NumuricButtonComponent implements OnInit {

  minVal = 1;
  maxVal = 99;

  @Input() tableObj: TableObj;

  @Input() currentValue: number;

 // tableObj: TableObj;

  // birthDate: Date = new Date();
  constructor() {
    // this.tableObj = new TableObj('', 1, 1);
   }

  ngOnInit() {
  }

  public onTapIncrease(arg) {
      // if (this.tableObj.NumberOfCustomer >= this.maxVal) {
      //   this.tableObj.NumberOfCustomer = this.maxVal;
      // } else {
      //   this.tableObj.NumberOfCustomer ++;
      // }
      if (this.currentValue >= this.maxVal) {
        this.currentValue = this.maxVal;
      } else {
        this.currentValue ++;
      }
      
      console.log(this.currentValue);

     // this.increaseBTService.onTapIncrease(arg);
  }

  public onTapDecrease(arg) {
    
    if ( this.currentValue  <= this.minVal) {
      this.currentValue  = this.minVal;
    } else {
      this.currentValue --;
    }
    // this.increaseBTService.onTapDecrease(arg);
  }

 


}
