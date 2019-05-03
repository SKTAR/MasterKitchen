import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})
export class TabAnimateService {

    constructor() {
    }

    	// this.tabHighlight.nativeElement.animate({
			// 	translate: { x: index * screen.mainScreen.widthDIPs / this.menuCategoryList.length, y: 0 },
			// 	curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
			// 	duration: 300
            // })
    animateTabHilight(arg:any , index: number , tabCount: number) {
    }
            
    animateCurrentImage(arg: any) {
    }
    
    animatePreviousImage(arg: any) {
    }
}


