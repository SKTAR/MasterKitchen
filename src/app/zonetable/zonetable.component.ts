import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GestureEventData, PanGestureEventData, RotationGestureEventData,
  PinchGestureEventData, SwipeGestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { Image } from 'tns-core-modules/ui/image';
// import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
// import {AnimationCurve} from 'tns-core-modules/ui/enums';
// import { MenuService } from '../helper/menucategory/menu.service';
import { GestureService } from '../shared/ui-services/gesture-event-service/gesture.service';
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
  constructor() {
    // Use the component constructor to inject services.
 }


  ngOnInit() {
    this.dragImageItem = <Image>this.dragImage.nativeElement;
    this.dragImageItem.translateX = 0;
    this.dragImageItem.translateY = 0;
    this.dragImageItem.scaleX = 1;
    this.dragImageItem.scaleY = 1;
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


  onPan(args: PanGestureEventData) {
   // console.log("Pana: [" + args.deltaX + ", " + args.deltaY + "] state: " + args.state);
   if (args.state === 1) {
     this.prevDeltaX = 0;
     this.prevDeltaY = 0;
   } else if (args.state === 2) {
     this.dragImageItem.translateX += args.deltaX - this.prevDeltaX;
     this.dragImageItem.translateY += args.deltaY - this.prevDeltaY;


     this.prevDeltaX = args.deltaX;
     this.prevDeltaY = args.deltaY;
   } else if (args.state === 3) {
      console.log('3:' + args.state);
   }
}

loadMenu() {
  // alert('load menu');
}


}
