import { Injectable, ElementRef } from '@angular/core';
import { GestureEventData, SwipeGestureEventData, PanGestureEventData,
    PinchGestureEventData, RotationGestureEventData } from 'tns-core-modules/ui/gestures/gestures';

@Injectable({providedIn: 'root'})
export class GestureService {
    prevDeltaX: number;
    prevDeltaY: number;
    constructor(private elementObj: ElementRef){
    }
    onTap(args: GestureEventData) {
        // console.log('Tap!');
        alert('tap');
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

    onPanImage(args: PanGestureEventData) {
    }

    onPinch(args: PinchGestureEventData) {
        console.log('Pinch scale: ' + args.scale + ' state: ' + args.state);
    }

    onRotate(args: RotationGestureEventData) {
        console.log('Rotate angle: ' + args.rotation + ' state: ' + args.state);
    }

}
