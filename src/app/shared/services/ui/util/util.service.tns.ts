import { Injectable } from '@angular/core';
// import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Label } from "tns-core-modules/ui/label";
import { EventData } from 'tns-core-modules/ui/page/page';
import { DropDown } from 'nativescript-drop-down';
@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }


  getTextFromButton(args) :string{
    const button = <Button>args.object;
  
    const page = button.page;
   // const bt =  <Button>page.getViewById(button.id);
    const text = button.text;
    return text;
    
  }

  getTextFromLabelID(args,label_id:string) :string{
    
    const page = args.object.page
    console.log(label_id);
    const lb =  <Label>page.getViewById(label_id);
    const text = lb.text;
    return text;
    
  }
  SetDropDownSelectIndexByID(args,id: string,index: number) {
    const page = args.object.page;
    const dd = <DropDown>page.getViewById(id);

    //const index = dd.selectedIndex;

    dd.selectedIndex = index;

  }



}
