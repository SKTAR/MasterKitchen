import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[hash]',
  })
  export class HashDirective  {
    @Input() hash: string;
  
    constructor(public vcRef: ViewContainerRef) {}
  }