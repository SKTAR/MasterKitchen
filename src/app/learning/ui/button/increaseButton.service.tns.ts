import {  Injectable, OnInit, Input } from '@angular/core';
import { EventData } from 'tns-core-modules/ui/page/page';
import { Button } from 'tns-core-modules/ui/button';
@Injectable({providedIn: 'root'})
export class IncreaseButtonService implements OnInit {
  // counter = 1;
  constructor() {
  }
  ngOnInit() {}

  public onTapIncrease(args: EventData) {
        const button = <Button>args.object;
       // alert('button ID :' + button.id + 'X:' +  button.originX + 'Y:' + button.originY + 'counter:' + this.counter + ' times!');
  }
  public onTapDecrease(args: EventData) {
    const button = <Button>args.object;
   // alert('button ID :' + button.id + 'X:' +  button.originX + 'Y:' + button.originY + 'counter:' + this.counter + ' times!');
}

}