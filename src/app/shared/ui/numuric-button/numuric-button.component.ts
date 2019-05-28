import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableObj } from '../../common-model/dine-table.model';
import { RoutingHelperService } from '../../router-helper/routing-helper.service';
import { NumuricButtonService } from './numuric-button.service';

@Component({
  selector: 'app-numuric-button',
  templateUrl: './numuric-button.component.html',
  styleUrls: ['./numuric-button.component.scss']
})
export class NumuricButtonComponent implements OnInit {

  minVal = 1;
  maxVal = 99;
  @Output() numberOfCustomer = new EventEmitter<number>();
  @Input() tableObj: TableObj;

 // @Input() currentValue: number;

 // tableObj: TableObj;

  // birthDate: Date = new Date();
  constructor() {
    // this.tableObj = new TableObj('', 1, 1);
   }

  ngOnInit() {
  }

  public onTapIncrease() {
      if (this.tableObj.NumberOfCustomer >= this.maxVal) {
        this.tableObj.NumberOfCustomer = this.maxVal;
      } else {
        this.tableObj.NumberOfCustomer ++;
      }   
     this.numberOfCustomer.emit(this.tableObj.NumberOfCustomer);
     //console.log(this.currentValue);
  }

  public onTapDecrease() {
    if (this.tableObj.NumberOfCustomer <= this.minVal) {
      this.tableObj.NumberOfCustomer = this.minVal;
    } else {
      this.tableObj.NumberOfCustomer --;
    }
    this.numberOfCustomer.emit(this.tableObj.NumberOfCustomer);

  }

 


}
