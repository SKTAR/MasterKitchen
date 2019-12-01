import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DineTableModel } from '../../models-services/restaurant/dine-table.model';

@Component({
  selector: 'app-increase-button',
  templateUrl: './increase-button.component.html',
  styleUrls: ['./increase-button.component.scss']
})
export class IncreaseButtonComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }
  minVal = 1;
  maxVal = 99;
  @Output() numberOfCustomer = new EventEmitter<number>();
  @Input() tableObj: DineTableModel;

 // @Input() currentValue: number;

 // tableObj: TableObj;

  // birthDate: Date = new Date();
 

  public onTapIncrease(args) {
     
    
    console.log(this.tableObj);
    if (this.tableObj.NumberOfCustomer >= this.maxVal) {
        this.tableObj.NumberOfCustomer = this.maxVal;
      } else {
         this.tableObj.NumberOfCustomer ++;
      }   
     this.numberOfCustomer.emit(this.tableObj.NumberOfCustomer);
     //console.log(this.currentValue);
     console.log(this.tableObj.NumberOfCustomer);
  }

  public onTapDecrease(args) {
    console.log('decrease');
    if (this.tableObj.NumberOfCustomer <= this.minVal) {
      this.tableObj.NumberOfCustomer = this.minVal;
    } else {
      this.tableObj.NumberOfCustomer --;
    }
    this.numberOfCustomer.emit(this.tableObj.NumberOfCustomer);

  }

    onFocus(args) {
    }
    onBlur(args) {
    }

}
