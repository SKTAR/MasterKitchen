import { Component, OnInit, ViewChild, EventEmitter, ElementRef, Output, Input } from '@angular/core';
import { MenuService } from '../shared/kitchen-services/menu.service';
import { map } from 'rxjs/operators';
import { RadlistviewMenuService } from './ui-service/radlistview-menu.service';
import { MenuItems, KOT } from '../shared/common-model/kot.model';
import { MenuModel, Ingredients  } from '../shared/kitchen-models/menu.model';
import { ActivatedRoute } from '@angular/router';
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
menuListByCategory: Array<MenuModel>; // send to Menu List By Category
@ViewChild('tabHighlight') tabHighlight: ElementRef;
selectedTab = 0;
colNum = 5;
rowNum = 1;
page = 'Select Menu';
categorySelected = ''; // string after selected


newMenu: MenuModel;				// for creating new Menu  
ingredient: Ingredients; // for creating  Ingredient of new Menu

autoCreateColumns = 5;
autoCreateRows = 1;
imageSelected = '';
images = [
'~/assets/images/food/burger/burger1.jpg',
'~/assets/images/food/burger/burger2.jpg',
'~/assets/images/food/burger/burger3.jpg',
'~/assets/images/food/burger/burger4.jpg',
'~/assets/images/food/burger/burger5.jpg',
'~/assets/images/food/burger/burger6.jpg',
'~/assets/images/food/burger/burger1.jpg',
'~/assets/images/food/cake/cake1.jpg',
'~/assets/images/food/cake/cake2.jpg',
'~/assets/images/food/cake/cake3.jpg',
'~/assets/images/food/cake/cake4.jpg',
'~/assets/images/food/burger/burger6.jpg'
];
tableID: string;
 //#endregion
// @Input() OrderMenuItem: MenuModel[] = []; // Recieve Data from MenuItemComponet then forward to Order Component
station = ['station1', 'station2', 'station3'];
constructor(private menuService: MenuService,
						private menuItemService: RadlistviewMenuService,
						private route: ActivatedRoute) {

	  this.autoCreateColumns =this.menuCategoryList.length;
		this.autoCreateRows	=	1;
		this.listAllCategory();
		// Create  New Menu
		this.newMenu = new MenuModel();
		this.newMenu.items = [];
		this.ingredient = new Ingredients();
			
		this.route.queryParams.subscribe(params => {
			this.tableID = params['tableID'];

			console.log('pass Data TableID:' + this.tableID);
			
		});


	}

	ngOnInit(): void {
		this.selectCategory(0);
	}


	public selectCategory(index: number) {

	 this.menuListByCategory = [];
	 this.imageSelected = this.images[index];
	 this.categorySelected = this.menuCategoryList[index];
	// alert('index:'+index+' ,Selected :'+this.categorySelected );
	if(this.categorySelected != null) {
	 this.loadMenuByCategory(this.categorySelected);
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
	 console.log(this.menuListByCategory);
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

getSelectedMenu($event) { // recieve selected menu items from menu-item component
  
	alert('Order Page');
	const item: MenuModel[] = $event;
	
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



}

public showMenuDetail(args) {
	
   const partNo = args.target.value; 
   alert(partNo);	
	 this.menuService.getOne(partNo).pipe(map((response) =>  {
		return this.newMenu = response;
	}))
	.subscribe((response) => {
	console.log(response);
},
error => {
	alert('Cannot get Menu By Id' + error);
	console.log(error);
});
}

public createNewMenu(menu: MenuModel) {


this.menuService.create(menu).subscribe(
	res => console.log(res),
		error => console.log(error) 
	);
	alert('part number' + menu.partNumber + ',' + 'sku:' + menu.sku);
}

public deleteMenu(menu: MenuModel) {
	this.menuService.delete(menu.partNumber).subscribe(
		res => console.log(res)
	);


}

public updateMenu(menu:MenuModel) {
	this.menuService.update(menu.partNumber, menu).subscribe(
		res => console.log(res)
	);

}

public addIngredient() {
const ing = new Ingredients();
ing['name'] 			= this.ingredient.name;
ing['category'] 	= this.ingredient.category;
ing['sku'] 			= this.ingredient.sku;
ing['quantity'] 	= this.ingredient.quantity;
ing['quantityUnit'] 	= this.ingredient.quantityUnit;
this.newMenu.items.push(ing);
}

public removeIngredient() {
const ing = new Ingredients();
ing['name'] 			= this.ingredient.name;
ing['category'] 	= this.ingredient.category;
ing['sku'] 			= this.ingredient.sku;
ing['quantity'] 	= this.ingredient.quantity;
ing['quantityUnit'] 	= this.ingredient.quantityUnit;

const removeIndex = this.newMenu.items.findIndex(item => item.name === ing['name']);
// alert('index to be removed' + removeIndex);
this.newMenu.items.splice(removeIndex, 1);
console.log(this.newMenu.items);
}

clearIngredient() {
	this.newMenu.items = [];
}

setStation(args) {

 alert(args.target.value);

}



}