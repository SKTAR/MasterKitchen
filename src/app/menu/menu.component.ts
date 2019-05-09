import { Component, OnInit, ViewChild, EventEmitter, ElementRef, Output } from '@angular/core';
import { MenuService } from '../shared/kitchen-services/menu.service';
import { map } from 'rxjs/operators';
import { RadlistviewMenuService } from './ui-service/radlistview-menu.service';
import { MenuItems, KOT } from '../shared/common-model/kot.model';
import { Menu, Ingredients } from '../shared/kitchen-models/menu.model';
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


	newMenu: Menu;

	ingredient: Ingredients;

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
	//	this.selectCategory(0);						
		//	this.loadMenuByCategory(this.menuCategoryList[0]); // Initial Load index 0

		// Create  New Menu  
		this.newMenu = new Menu();
		this.newMenu.items = [];
		this.ingredient = new Ingredients();
	
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
	// alert('index:'+index+' ,Selected :'+this.categorySelected );
	if(this.categorySelected != null) {
	 this.loadMenuByCategory(this.categorySelected);
	
	// Make Observable Array
	// if(this.menuListByCategory != null)
	  
	// 	//alert('Have Data'+this.menuListByCategory.length);
	// 	this.dataItems = this.menuItemService.getMenuObservableArray(this.menuListByCategory);

	// }
	// else 
	// {
	// 	//alert('NO Data');
	// }

	}
}
 

	public listAllCategory() {
		this.menuService.listCategories().pipe(map((response) =>  {
			return this.menuCategoryList = response;
		}))
		.subscribe((response) => {
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
 		// this.menuListByCategory = response;
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

getSelectedMenu($event) {
  
	alert('Order Page');
	const item: Menu[] = $event;
	if (item.length > 0 || item != null) {
	for (let i = 0 ; i < item.length ; i++) {
	 alert('Menu Component item:' + i + '=' + item[i].name  + ' , ' + item[i].price);
	// &#xf0d6;
	}

}

let a = new KOT();
Object.keys(a).forEach(key => console.log(key));

for (let key in a) {
    console.log(key);
}


const items2: MenuItems[] = 
[{
	'partNumber'  : '011',
	'name'        : 'ข้าวผัด',
	'unitPrice'   : 100,
	'quantity'    : 2,  //4,
	'total'       : 200

}];


const kot = new KOT();
kot.customerName = 'Tar';
kot.customerNumber = 3;
kot.shipTo = 'table3';// table3
kot.contactName = 'Tar'; ; 
kot.saleName  = 'staff1';
kot.status  = 'OPEN'; // 'OPEN'
kot.type = 'DineIn';  // Dine In
kot.orderNumber = 'Order0001'; //'Order0001',
kot.paymentTerm = ''; // string;// "CASH",
kot.deliveryTime = 0; //30,
kot.deliveryUnit = 'Minute';//"Minute",
kot.validDate = new Date();// Date //"2019-03-19T13:43:21.270Z",

kot.items = items2;

console.log(JSON.stringify(kot));

}


public createNewMenu(menu: Menu) {


	
	

	this.menuService.create(menu).subscribe(
		res => console.log(res),
		error => console.log(error) // error path
	);

	alert('part number' + menu.partNumber + ',' + 'sku:' + menu.sku);



		// newMenu.
		// newMenu.partNumber: number;
		// newMenu.name: string;
		// newMenu.category: string;
		// newMenu.sku: string;
		// newMenu.price: number;
		// newMenu.items: MenuItems;
		// newMenu.createdDate: Date;
		// newMenu.updatedDate: Date;
		// newMenu.v: number;
	  

		//   'partNumber': string;
		//   'name': string;
		//   'type': string;
		//   'category': string;
		//   'sku': string;
		//   'quantity': number;
		//   'quantityUnit': string;
	 
	// this.menuService.create()
}

public deleteMenu(menu: Menu) {
	this.menuService.delete(menu.partNumber).subscribe(
		res => console.log(res)
	);


}

public addIngredient(ingredient: Ingredients) {
	//alert(ingredient.name);
	this.newMenu.items.push(ingredient);
//	console.log(this.newMenu);
	console.log(this.newMenu.items);
//	this.newMenu.items.push(ingredient);
	//this.ingredients.push(items);

}

public removeIngredient(ingredient: Ingredients) {
	//alert(ingredient.name);
	this.newMenu.items.splice(1,1);
	let removeIndex = this.newMenu.items.indexOf(ingredient,0);
	alert('index to be remove:'+ removeIndex);//	
    console.log(this.newMenu);
	console.log(this.newMenu.items);
//	this.newMenu.items.push(ingredient);
	//this.ingredients.push(items);

}

}