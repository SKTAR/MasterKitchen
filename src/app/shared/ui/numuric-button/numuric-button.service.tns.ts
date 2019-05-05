import {  Injectable, OnInit, Input } from '@angular/core';
import { EventData, Page, getViewById, Observable } from 'tns-core-modules/ui/page/page';
import { Button } from 'tns-core-modules/ui/button';
import { TextField } from 'tns-core-modules/ui/text-field';
import { userInfo } from 'os';
@Injectable({providedIn: 'root'})
export class NumuricButtonService implements OnInit {
  // counter = 1;
  constructor() {
  }
  ngOnInit() {}

  public onTapIncrease(args: EventData): number {
   const button = <Button>args.object;
   // alert('InService');

    const id = button.id;
    const txtID = 'txt_'+ id.split('_')[1]; 
    alert(txtID);

   const page = button.page;
   const txtField =  <TextField>page.getViewById(txtID);
   alert('Button ID :' + button.id + 'ui:' + txtField.id + 'ui_value:' + txtField.text);
 
    const val =   parseInt(txtField.text)+1;
    const vm = new Observable();
    txtField.text = String(val);
    txtField.bindingContext = vm;
    return val;
       // alert('button ID :' + button.id + 'X:' +  button.originX + 'Y:' + button.originY + 'counter:' + this.counter + ' times!');
  }
  public onTapDecrease(args: EventData): number{
    
   const button = <Button>args.object;
   // alert('InService');

    const id = button.id;
    const txtID = 'txt_'+ id.split('_')[1]; 
    alert(txtID);

   const page = button.page;
   const txtField =  <TextField>page.getViewById(txtID);
   alert('Button ID :' + button.id + 'ui:' + txtField.id + 'ui_value:' + txtField.text);
 
    const val =   parseInt(txtField.text)-1;
    const vm = new Observable();
    txtField.text = String(val);
    txtField.bindingContext = vm;

  
    return val;
   // alert('button ID :' + button.id + 'X:' +  button.originX + 'Y:' + button.originY + 'counter:' + this.counter + ' times!');
}

}