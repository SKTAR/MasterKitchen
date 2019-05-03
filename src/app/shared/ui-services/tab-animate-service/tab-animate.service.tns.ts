import { Injectable } from '@angular/core';
import { AnimationCurve } from 'tns-core-modules/ui/enums/enums';
import { screen } from 'tns-core-modules/platform';
@Injectable({providedIn: 'root'})
export class TabAnimateService {

constructor() {
}
 	
   animateTabHilight(arg:any , index: number, tabCount: number) {
        arg.nativeElement.animate({
				translate: { x: index * screen.mainScreen.widthDIPs / tabCount, y: 0 },
				curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
				duration: 300
            })
   }
animateCurrentImage(arg: any) {
    arg.nativeElement.animate({
        scale: { x: 1.2, y: 1.2 },
        curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
        duration: 300
    });
}

animatePreviousImage(arg: any) {
    arg.nativeElement.animate({
        scale: { x: 1, y: 1 },
        curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
        duration: 300
    })
}

}


