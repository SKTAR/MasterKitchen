import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GestureEventData, PanGestureEventData, RotationGestureEventData,
  PinchGestureEventData, SwipeGestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { Image } from 'tns-core-modules/ui/image';
// import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
// import {AnimationCurve} from 'tns-core-modules/ui/enums';
// import { MenuService } from '../helper/menucategory/menu.service';
import { GestureService } from '../shared/ui-services/gesture-event-service/gesture.service';
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
import {AnimationCurve} from 'tns-core-modules/ui/enums';
@Component({
 // providers: [DraggableService, MenuService],
  selector: 'app-zonetable',
  templateUrl: './zonetable.component.html',
  styleUrls: ['./zonetable.component.scss']
})
export class ZonetableComponent implements OnInit {
  @ViewChild('dragImage') dragImage: ElementRef;
   dragImageItem: Image;
  prevDeltaX: number;
  prevDeltaY: number;

  @ViewChild('container') container: ElementRef;
  itemContainer: GridLayout;

   convFactor: any;
   edgeX: any;
   edgeY: any;

   imgWidth: number;
  constructor() {
    // Use the component constructor to inject services.
 }


  ngOnInit() {
    // this.dragImageItem = <Image>this.dragImage.nativeElement;
    
    this.dragImageItem = <Image>this.dragImage.nativeElement;
    this.dragImageItem.translateX = 100;
    this.dragImageItem.translateY = 200;
    this.dragImageItem.scaleX = 1;
    this.dragImageItem.scaleY = 1;

    this.itemContainer = <GridLayout>this.container.nativeElement;
  }

  onTap(args: GestureEventData) {
    console.log('Tap!');
}

onDoubleTap(args: GestureEventData) {
    console.log('DoubleTap!');
}

onLongPress(args: GestureEventData) {
    console.log('LongPress!');
}

onSwipe(args: SwipeGestureEventData) {
    console.log('Swipe Direction: ' + args.direction);
}


onPinch(args: PinchGestureEventData) {
    console.log('Pinch scale: ' + args.scale + ' state: ' + args.state);
}

onRotate(args: RotationGestureEventData) {
    console.log('Rotate angle: ' + args.rotation + ' state: ' + args.state);
}

//#region OnPan Doesn't Work
/*
onPan(args: PanGestureEventData) {
  //console.log("Pana: [" + args.deltaX + ", " + args.deltaY + "] state: " + args.state);
  if (args.state === 1) // down
  {
    this.prevDeltaX = 0;
    this.prevDeltaY = 0;
  }
  else if (args.state === 2) // panning
  {
    this.dragImageItem.translateX += args.deltaX - this.prevDeltaX;
    this.dragImageItem.translateY += args.deltaY - this.prevDeltaY;

    this.prevDeltaX = args.deltaX;
    this.prevDeltaY = args.deltaY;

    // calculate the conversion from DP to pixels
    // this.imgWidth = Number(this.dragImageItem.width);
    this.convFactor = (Number(this.dragImageItem.width) / this.dragImageItem.getMeasuredWidth());
     this.edgeX = (this.itemContainer.getMeasuredWidth() - this.dragImageItem.getMeasuredWidth()) * this.convFactor;
     this.edgeY = (this.itemContainer.getMeasuredHeight() - this.dragImageItem.getMeasuredHeight()) * this.convFactor;      

    // X border
    if (this.dragImageItem.translateX < 0) {
      this.dragImageItem.translateX = 0;
    }
    else if (this.dragImageItem.translateX > this.edgeX) {
      this.dragImageItem.translateX = this.edgeX;
    }

    // Y border
    if (this.dragImageItem.translateY < 0) {
      this.dragImageItem.translateY = 0;
    }
    else if (this.dragImageItem.translateY > this.edgeY) {
      this.dragImageItem.translateY = this.edgeY;
    }
  }
  else if (args.state === 3) // up
  {      
    this.dragImageItem.animate({
      translate: { x: 0, y: 0 },
      duration: 1000,
      curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
    });      
  }
}
*/
//#endregion

  onPan(args: PanGestureEventData) {
   // console.log("Pana: [" + args.deltaX + ", " + args.deltaY + "] state: " + args.state);
   if (args.state === 1) {// down
     this.prevDeltaX = 0;
     this.prevDeltaY = 0;
     console.log('down:' + this.dragImageItem.translateX , this.dragImageItem.translateY);
   } else if (args.state === 2) {
     this.dragImageItem.translateX += args.deltaX - this.prevDeltaX;
     this.dragImageItem.translateY += args.deltaY - this.prevDeltaY;


     this.prevDeltaX = args.deltaX;
     this.prevDeltaY = args.deltaY;

 // calculate the conversion from DP to pixels
    /* this.imgWidth = Number(this.dragImageItem.width);
     this.convFactor = (Number(this.dragImageItem.width) / this.dragImageItem.getMeasuredWidth());
     this.edgeX = (this.itemContainer.getMeasuredWidth() - this.dragImageItem.getMeasuredWidth()) * this.convFactor;
     this.edgeY = (this.itemContainer.getMeasuredHeight() - this.dragImageItem.getMeasuredHeight()) * this.convFactor;      
    */


     // X border
     if (this.dragImageItem.translateX < 0) {
      this.dragImageItem.translateX = 0;
    }
    /* else if (this.dragImageItem.translateX > this.edgeX) {
    //  this.dragImageItem.translateX = this.edgeX;
   }*/

    // Y border
    if (this.dragImageItem.translateY < 0) {
      this.dragImageItem.translateY = 0;
    }
    /* else if (this.dragImageItem.translateY > this.edgeY) {
    //  this.dragImageItem.translateY = this.edgeY;
     }*/
   } else if (args.state === 3) { // up
      // console.log('3:' + args.deltaX,args.deltaY);
      console.log('Up :' + this.dragImageItem.translateX , this.dragImageItem.translateY);
   }

   // console.log(this.dragImageItem.x)
}

loadMenu() {
  // alert('load menu');
}


}
