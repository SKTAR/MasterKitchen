import {  Injectable, OnInit, Input } from '@angular/core';

@Injectable({providedIn: 'root'})
export class NumuricButtonService implements OnInit {
  counter: number;
  ngOnInit() {}

  constructor() {
  }
  public onTapIncrease(args): number {
    return 0;
  }
  public onTapDecrease(args): number {
    return 0;
  }
}
