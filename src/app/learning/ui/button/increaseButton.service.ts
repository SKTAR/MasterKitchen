import {  Injectable, OnInit, Input } from '@angular/core';

@Injectable({providedIn: 'root'})
export class IncreaseButtonService implements OnInit {
  counter: number;
  ngOnInit() {}

  constructor() {
  }
  public onTapIncrease(args) {
  }
  public onTapDecrease(args) {
  }
}
