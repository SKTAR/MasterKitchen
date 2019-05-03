import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { TabAnimateService } from '../../../shared/ui-services/tab-animate-service/tab-animate.service';

@Component({
  selector: 'app-tab-gridlayout-auto-row',
  templateUrl: './tab-gridlayout-auto-row.component.html',
  styleUrls: ['./tab-gridlayout-auto-row.component.scss']
})
export class TabGridlayoutAutoRowComponent implements OnInit {
  menuCategoryList = ['image1', 'image2' , 'image3' , 'image4' , 'image5'];
  autoCreateColumns = 5;
  autoCreateRows    = 1;
  @ViewChild('tabHighlight') tabHighlight: ElementRef;
	selectedTab = 0;
	@ViewChild('image1') image1: ElementRef;
	@ViewChild('image2') image2: ElementRef;
	@ViewChild('image3') image3: ElementRef;
	@ViewChild('image4') image4: ElementRef;
	@ViewChild('image5') image5: ElementRef;

  icon_images = [
    "~/assets/images/icon/ic_1.png",
    "~/assets/images/icon/ic_2.png",
    "~/assets/images/icon/ic_3.png",
    "~/assets/images/icon/ic_4.png",
    "~/assets/images/icon/ic_5.png",
  ];

@Output() tabSelected = new EventEmitter<number>();
// @ViewChildren(HashDirective) private hashes: QueryList<HashDirective>;

constructor(private tabAnimateService: TabAnimateService) {
 this.autoCreateColumns = this.menuCategoryList.length;
 this.autoCreateRows = 1;
}

  ngOnInit() {
  }
	ngAfterViewInit() {
    
		setTimeout(() => { this.animateCurrentImage(this.image1); }, 100);
	}
  // getContainerFor(name: string) {
  //   return this.hashes.find(x => x.hash === name).vcRef;
  // }
	selectTab(index: number) {
		let previousTab = this.selectedTab;
		if (index != this.selectedTab) {
			this.selectedTab = index;
			// this.tabHighlight.nativeElement.animate({
			// 	translate: { x: index * screen.mainScreen.widthDIPs / this.menuCategoryList.length, y: 0 },
			// 	curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
			// 	duration: 300
      // })
      
      this.tabAnimateService.animateTabHilight(this.tabHighlight , index , this.menuCategoryList.length);
			this.animateCurrentImage(this.getImage(index));
			this.animatePreviousImage(this.getImage(previousTab));
			this.tabSelected.emit(this.selectedTab);
    }
    

  }
  getImage(index) {
		let currentImage;
		switch (index) {
			case 0:
				currentImage = this.image1;
				break;
			case 1:
				currentImage = this.image2;
				break;
			case 2:
				currentImage = this.image3;
				break;
			case 3:
				currentImage = this.image4;
				break;
			case 4:
				currentImage = this.image5;
				break;
			default:
				break; 
		}
		return currentImage;
	}

  animateCurrentImage(arg: any) {
		this.tabAnimateService.animateCurrentImage(arg);
	}

	animatePreviousImage(arg: any) {
		this.tabAnimateService.animatePreviousImage(arg);
  }
}
