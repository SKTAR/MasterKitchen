import {  Injectable, OnInit, Input } from '@angular/core';
import { EventData, Page, getViewById, Observable } from 'tns-core-modules/ui/page/page';
import { Button } from 'tns-core-modules/ui/button';
import { TextField } from 'tns-core-modules/ui/text-field';
import { userInfo } from 'os';
import { Image } from 'tns-core-modules/ui/image';
import { EventEmitter } from 'events';
@Injectable({providedIn: 'root'})
export class NumuricButtonService implements OnInit {
  // counter = 1;
  constructor() {
  }
  ngOnInit() {}

  
  public IncreaseValue(args: EventData, textId: string): number {
   
   alert('send ID' + textId);
   const button = <Button>args.object;
   // alert('InService');

    const id = button.id;
    const txtID = 'txt_'+ id.split('_')[1]; 
    alert(txtID);

   const page = button.page;
   const txtField =  <TextField>page.getViewById(txtID);
   // alert('Button ID :' + button.id + 'ui:' + txtField.id + 'ui_value:' + txtField.text);
 
    const val =   parseInt(txtField.text)+1;
    const vm = new Observable();
    txtField.text = String(val);
    txtField.bindingContext = vm;
    return val;
       // alert('button ID :' + button.id + 'X:' +  button.originX + 'Y:' + button.originY + 'counter:' + this.counter + ' times!');
  }
  public DecreaseValue(args: EventData, textId: string): number{
    
   alert('send ID' + textId);
   const button = <Button>args.object;
   // alert('InService');

    const id = button.id;
    const txtID = 'txt_'+ id.split('_')[1]; 
    alert(txtID);

   const page = button.page;
   const txtField =  <TextField>page.getViewById(txtID);
   //alert('Button ID :' + button.id + 'ui:' + txtField.id + 'ui_value:' + txtField.text);
 
    const val =   parseInt(txtField.text)-1;
    const vm = new Observable();
    txtField.text = String(val);
    txtField.bindingContext = vm;

  
    return val;
   // alert('button ID :' + button.id + 'X:' +  button.originX + 'Y:' + button.originY + 'counter:' + this.counter + ' times!');
}

 getNumberCustomer(args, tableID: string) {
      const img =   <Image>args.object;
      const page = img.page;
   const txtID  = 'num' + tableID.split('_')[1];
   const txtField =  <TextField>page.getViewById(txtID);
   //alert('Button ID :' + button.id + 'ui:' + txtField.id + 'ui_value:' + txtField.text);
    
    const val =   parseInt(txtField.text);
    return val;
}

}