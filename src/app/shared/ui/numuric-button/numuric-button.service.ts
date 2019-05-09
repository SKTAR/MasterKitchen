import {  Injectable, OnInit, Input } from '@angular/core';

@Injectable({providedIn: 'root'})
export class NumuricButtonService implements OnInit {
  counter: number;
  ngOnInit() {}

  constructor() {
  }
  public IncreaseValue(args,txtId: string): number {
    return 0;
  }
  public DecreaseValue(args,txtId: string): number {
    return 0;
  }
}
