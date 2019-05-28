import { Component, OnInit, ViewChild, EventEmitter, ElementRef, Output, Input } from '@angular/core';
import { MenuService } from '../shared/kitchen-services/menu.service';
import { map, tap } from 'rxjs/operators';
import { RadlistviewMenuService } from './ui-service/radlistview-menu.service';
import { KOT } from '../shared/common-model/kot.model';
import { MenuModel, Ingredients  } from '../shared/kitchen-models/menu.model';
import { ActivatedRoute } from '@angular/router';
import { StationService } from '../shared/kitchen-services/station.service';
import { Station } from '../shared/common-model/station.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { KOTService } from '../shared/kitchen-services/kot.service';
// @Directive({
//   selector: '[hash]',
// })
// export class HashDirective  {
//   @Input() hash: string;

//   constructor(public vcRef: ViewContainerRef) {}
// }
interface OrderItems {
	"category": string;
	"items": MenuModel[];
}
export class TabSelected {
	'category':string;
	'selected':boolean;
	'menuitems': MenuModel[];
		
	
}
@Component({
 
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  
})
export class MenuComponent implements OnInit {

private menu = new BehaviorSubject<MenuModel>(new MenuModel);


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
numCustomer: number;
orderType: string;
 //#endregion
// @Input() OrderMenuItem: MenuModel[] = []; // Recieve Data from MenuItemComponet then forward to Order Component
stationList: Station[];

 tabSelect: TabSelected[] = [];
 orderItems: MenuModel[] = [];

constructor(private menuService: MenuService,
						private menuItemService: RadlistviewMenuService,
						private route: ActivatedRoute,
						private stationService: StationService,
						private kotService: KOTService) {

		this.tableID = null; // Clear
		this.numCustomer = null; // Clear
	  this.autoCreateColumns =this.menuCategoryList.length;
		this.autoCreateRows	=	1;
		this.listAllCategory();
		// Create  New Menu
		this.newMenu = new MenuModel();
		this.newMenu.items = [];
		this.ingredient = new Ingredients();
			
		this.route.queryParams.subscribe(params => {
			this.tableID = params['tableID'];
			this.numCustomer = params['numCust'];
			this.orderType = params['orderType'];
			console.log('pass Data TableID:' + this.tableID);
			
		});

		this.stationService.list().pipe(map((response:Station[]) =>  {
			return this.stationList = response;
		}))
		.subscribe((response) => {
		console.log(response);
		},
		error => {
		alert('Cannot get station list' + error);
		console.log(error);
		 });
		 
		

	}

	ngOnInit(): void {
		this.selectCategory(0);
		this.tabSelect =[];

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
		
		console.log(response);
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
	 console.log('len' + response.length);
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
  
	//alert('Order Page');
	this.orderItems = $event;
	


	if (this.orderItems.length > 0 || this.orderItems != null) {
	for (let i = 0 ; i < this.orderItems.length ; i++) {
	 alert('Menu Component item:' + i + '=' + this.orderItems[i].name  + ' , ' + this.orderItems[i].price);
	// &#xf0d6;
	}

}

let a = new KOT();
Object.keys(a).forEach(key => console.log(key));

for (let key in a) {
    console.log(key);
}

const check = this.tabSelect.find(x => x['category'] === this.categorySelected);
		
	 
console.log("true or false :"+ check);

   if(check === undefined) {
	if (this.orderItems.length > 0) {
	   const newTab = new TabSelected();
	   newTab['category'] = this.categorySelected;
	   newTab['selected'] = true;
	   newTab['menuitems'] = this.orderItems;
	   this.tabSelect.push(newTab);
	}
   }
   else {
	  
	if(this.orderItems.length === 0 || this.orderItems == null)
	{
		alert('No select');
		const removeIndex = this.newMenu.items.findIndex(x => x['category'] === this.categorySelected);
		// alert('index to be removed' + removeIndex);
		this.tabSelect.splice(removeIndex, 1);
	}
	else {
		check['menuitems'] = this.orderItems;
	}
}
   console.log(this.tabSelect);

}

public showMenuDetail(uid: string) {
	
  // const partNo = args.target.value;
   
 	 alert(uid);	
	 this.menuService.getOne(uid).pipe(map((response: MenuModel) =>  {
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

public createNewMenu() {


this.menuService.create(this.newMenu).subscribe(
	res => console.log(res),
		error => console.log(error)
	);
	alert('part number'+ this.newMenu.uid + this.newMenu.partNumber + ',' + 'sku:' + this.newMenu.sku);
}

public deleteMenu() {
	this.menuService.delete(this.newMenu.uid).subscribe(
		res => console.log(res)
	);


}

public updateMenu() {
	this.menuService.update(this.newMenu.uid, this.newMenu).subscribe(
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

setStation(stationName: string) {

 alert(stationName);
 this.newMenu.station = stationName;

}

//#region Web method
searchMenuItem(partNo: string) {
	alert(partNo);
}
//#endregion
public confirm() {

  const kot = new KOT();
  kot.customerName = '';
  kot.customerNumber = this.numCustomer;
  kot.shipTo = this.tableID;        // get Input From Order Component
  kot.contactName = 'Tar';          // ***************************Watreceive when customer pay 
  kot.saleName  = 'staff1';         // recieve when login
  kot.status  = 'OPEN';             // 'OPEN'
  kot.type = 'DineIn';              // Dine In
  kot.orderNumber = 'Order0001';    //' Query and plus one
  kot.paymentTerm = '';             // ***************************payment;// 'CASH',
  kot.deliveryTime = 0;             // 30,
  kot.deliveryUnit = 'Minute';      //'Minute',
  kot.validDate = new Date();       // Date //'2019-03-19T13:43:21.270Z',
  
  kot.items = this.orderItems;
  
  console.log(JSON.stringify(kot));
  
	this.createNewKOT(kot);

  }
  
  
  cancle() {
  }


  public createNewKOT(newKOT: KOT) {

    this.kotService.create(newKOT).subscribe(
      res => console.log(res),
        error => console.log(error)
      );
         }
    
    public deleteKOT(kot: KOT) {
      this.kotService.delete(kot).subscribe(
        res => console.log(res)
      );
    
    
    }

  
}