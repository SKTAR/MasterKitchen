import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TableObj } from '../../../../models/dine-table.model';


@Component({
  selector: 'app-numric-button',
  templateUrl: './numric-button.component.html',
  styleUrls: ['./numric-button.component.scss']
})
export class NumricButtonComponent implements OnInit {

  
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
