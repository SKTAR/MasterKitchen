import { Injectable } from '@angular/core';
// import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { EventData } from 'tns-core-modules/ui/page/page';
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
}
