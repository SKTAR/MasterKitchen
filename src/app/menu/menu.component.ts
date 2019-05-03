import { Component, OnInit, ViewChild, EventEmitter, ElementRef, Output } from '@angular/core';
import { Menu } from '../shared/kitchen-models/menu.model';
import { MenuService } from '../shared/kitchen-services/menu.service';
import { map } from 'rxjs/operators';
import { RadlistviewMenuService } from './ui-service/radlistview-menu.service';

// @Directive({
//   selector: '[hash]',
// })
// export class HashDirective  {
//   @Input() hash: string;

//   constructor(public vcRef: ViewContainerRef) {}
// }
@Component({
 
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  
})
export class MenuComponent implements OnInit {

 menuCategoryList: any = [];
 menuListByCategory: Array<Menu>; // send to Menu List By Category
 @ViewChild('tabHighlight') tabHighlight: ElementRef;
	selectedTab: number = 0;
colNum = 5;
rowNum = 1;
page = 'Select Menu';
categorySelected = ''; // string after selected
dataItems; // Sharing to Menu-Item- Component 


	// @ViewChild('image1') image1: ElementRef;
	// @ViewChild('image2') image2: ElementRef;
	// @ViewChild('image3') image3: ElementRef;
	// @ViewChild('image4') image4: ElementRef;
	// @ViewChild('image5') image5: ElementRef;

//	@Output() tabSelected = new EventEmitter<number>();

     autoCreateColumns = 5;
     autoCreateRows = 1;
     images = [
			'~/assets/images/food/burger/burger1.jpg',
			'~/assets/images/food/burger/burger2.jpg',
			'~/assets/images/food/burger/burger3.jpg',
			'~/assets/images/food/burger/burger4.jpg',
			'~/assets/images/food/burger/burger5.jpg',
			'~/assets/images/food/burger/burger6.jpg',
		// 	"~/assets/images/food/burger/burger1.jpg",
		// 	"~/assets/images/food/burger/burger2.jpg",
		// 	"~/assets/images/food/burger/burger3.jpg",
		// 	"~/assets/images/food/burger/burger4.jpg",
		// 	"~/assets/images/food/burger/burger5.jpg",
		// 	"~/assets/images/food/burger/burger6.jpg"
	];

	imageSelected = '';
 //#endregion
 public status = 'not scrolling';
	
	constructor(private menuService: MenuService,
							private menuItemService: RadlistviewMenuService) {

    this.autoCreateColumns =this.menuCategoryList.length;
		this.autoCreateRows=1;
		this.listAllCategory();
		this.loadMenuByCategory(this.menuCategoryList[0]); // Initial Load index 0
	
	
	
	}

	ngOnInit(): void {
		//this.selectCategory(0);
		this.selectCategory(0);
	}

	ngAfterViewInit(): void {
		//Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
		//Add 'implements AfterViewInit' to the class.
		
	}

	public selectCategory(index: number) {

	 this.menuListByCategory = [];
	 this.categorySelected = '';
	 this.imageSelected = '';
	 this.imageSelected = this.images[index];
	 this.categorySelected = this.menuCategoryList[index];
	 alert('index:'+index+' ,Selected :'+this.categorySelected );
	if(this.categorySelected != null) {
	 this.loadMenuByCategory(this.categorySelected);

	// Make Observable Array
	if(this.menuListByCategory != null)
	  
		alert('Have Data'+this.menuListByCategory.length);
		this.dataItems = this.menuItemService.getMenuObservableArray(this.menuListByCategory);
    
		
	}
	else 
	{
		alert('NO Data');
	}

	
//	this.loadMenuByCategoryNext(this.categorySelected );
	// console.log('selected-->' + JSON.stringify(this.menuListByCategory));

	//  if(index == 0) {
	//  	this.dataItems = this.itemService.getMenuItems();
	//  }else	if(index == 1) {
	// 	this.dataItems = this.itemService.getMenuItems2();
	//  }
	//  else {
	// 	this.dataItems = this.itemService.getMenuItems3();
	//  }

	}
 

	public listAllCategory() {
		this.menuService.listCategories().pipe(map((response) =>  {
			return this.menuCategoryList = response;
		}))
		.subscribe((response) => {
		//console.log(response);
		// return this.menuCategoryList;
	//	console.log('test' + this.menuCategoryList);
		console.log('len' + this.menuCategoryList.length);
},
error => {
		alert('Cannot get Menu Category' + error);
		console.log(error);
 });
}

public loadMenuByCategory(category: string) {
	
	this.menuService.listMenuByCategory(category).pipe(map((response) =>  {
		return this.menuListByCategory = response;
	}))
	// .toPromise().then((result) =>
	// {
	// 	this.menuListByCategory = result;
	// 	console.log('Promise-->' + JSON.stringify(this.menuListByCategory));
	// },
	.subscribe((response) => {
 // console.log(response);
 		this.menuListByCategory = response;
	// console.log('test' + JSON.stringify(this.menuListByCategory));
     console.log('len' + this.menuListByCategory.length);
	 },
error => {
	alert('Cannot get MenuItems ' + error);
	console.log(error);
});




}


loadMenuByCategoryNext(category: string) {
	this.menuService.listMenuByCategory(category).subscribe({
		next: x => console.log('next' + JSON.stringify(x)),
		error: err => console.error('something wrong occurred: ' + err),
		complete: () => console.log('done'),
	  });
}

getInputFromOutputMenuItem($event) {
	const itemNameFromMenuItem = $event;
	alert('image from Output Menu Item:' + itemNameFromMenuItem);
}



}
