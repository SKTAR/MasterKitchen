import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuModel, IngredientModel } from '../../../shared/models/menu.model';
import { StationModel } from '../../../shared/models/station.model';
import { MenuService } from '../../../shared/services/restaurant/menu.service';
import { RadlistviewMenuService } from '../../../shared/services/ui/radlistview-menu-service/radlistview-menu.service';
import { ActivatedRoute } from '@angular/router';
import { StationService } from '../../../shared/services/restaurant/station.service';
import { KOTService } from '../../../shared/services/restaurant/kot.service';
import { map } from 'rxjs/operators';
import { KotModel } from '../../../shared/models/kot.model';
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
  selector: 'app-menu-select',
  templateUrl: './menu-select.component.html',
  styleUrls: ['./menu-select.component.scss']
})
export class MenuSelectComponent implements OnInit {

  private menu = new BehaviorSubject<MenuModel>(new MenuModel);


  menuCategoryList: any = [];
  menuListByCategory: MenuModel[];  //:  Array<MenuModel>; // send to Menu List By Category
  @ViewChild('tabHighlight') tabHighlight: ElementRef;
  selectedTab = 0;
  colNum = 5;
  rowNum = 1;
  page = 'Select Menu';
  categorySelected = ''; // string after selected
  
  
  newMenu: MenuModel;				// for creating new Menu  
  ingredient: IngredientModel; // for creating  Ingredient of new Menu
  
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
  stationList: StationModel[];
  
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
      this.ingredient = new IngredientModel();
      //#region Recieved Data From  KotComponent
          this.route.queryParams.subscribe(params => {
            this.tableID = params['tableID'];
            this.numCustomer = params['numCust'];
            this.orderType = params['orderType'];
          // console.log('pass Data TableID:' + this.tableID);
          // console.log('pass Data Number of Customer:' + this.numCustomer);
      });
  
      //#endregion
      //#region List Station
      this.stationService.list().pipe(map((response: StationModel[]) =>  {
        return this.stationList = response;
      }))
      .subscribe((response) => {
      console.log(response);
      },
      error => {
      alert('Cannot get station list' + error);
      console.log(error);
       });
       //#endregion
    }
  
    ngOnInit(): void {
      this.selectCategory(0);
      this.tabSelect =[];
  
    }

    public selectCategory(index: number) {
      this.menuListByCategory = [];
      this.imageSelected = this.images[index];
      this.categorySelected = this.menuCategoryList[index];
      // alert('index:'+index+' ,Sected :'+this.categorySelected );
     if(this.categorySelected != null) {
       console.log('start load by category');
      this.loadMenuByCategory(this.categorySelected);
      
    }
   }
     public listAllCategory() {
       this.menuService.listCategories().pipe(map((response) =>  {
         return this.menuCategoryList = response;
       }))
       .subscribe((response) => {
        console.log('menthod list all category');
        console.log(response);
   },
   error => {
       alert('Cannot get Menu Category' + error);
       console.log(error);
    });
   }
   
   public loadMenuByCategory(category: string) {
    
     this.menuService.listCategoryByName(category).pipe(map((response: MenuModel[]) =>  {
      return this.menuListByCategory = response;
    }))
     .subscribe((response) => {
      console.log('method load by category :'+category);
        console.log( response);
      },
   error => {
        alert('Cannot get MenuItems ' + error);
        console.log('error');
        console.log(error);
   });
  }

  //  loadMenuByCategoryNext(category: string) {
  //    this.menuService.listMenuByCategory(category).subscribe({
  //      next: x => console.log('next' + JSON.stringify(x)),
  //      error: err => console.error('something wrong occurred: ' + err),
  //      complete: () => console.log('done'),
  //      });
  // }
   
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
   
   let a = new KotModel();
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
      this.menuService.getByUid(uid).pipe(map((response: MenuModel) =>  {
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
    // alert('part number'+ this.newMenu.uid + this.newMenu.partNumber + ',' + 'sku:' + this.newMenu.sku);
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
   const ing = new IngredientModel();

    if(this.ingredient.name != null){
      ing['name'] 			= this.ingredient.name;
      // ing['category'] 	= this.ingredient.category;
      // ing['sku'] 			= this.ingredient.sku;
      ing['quantity'] 	= this.ingredient.quantity;
      ing['quantityUnit'] 	= this.ingredient.quantityUnit;
      this.newMenu.items.push(ing);
    }
   }
   
   public removeIngredient() {
   const ing = new IngredientModel();
   ing['name'] 			= this.ingredient.name;
  //  ing['category'] 	= this.ingredient.category;
  //  ing['sku'] 			= this.ingredient.sku;
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
    //this.newMenu.station = stationName;
   
   }
   
   //#region Web method
   searchMenuItem(partNo: string) {
     alert(partNo);
   }
   //#endregion
   public confirm() {
   
     const kot = new KotModel();
    //  kot.customerName = '';
    //  kot.customerNumber = this.numCustomer;
    //  kot.shipTo = this.tableID;        // get Input From Order Component
    //  kot.contactName = 'Tar';          // ***************************Watreceive when customer pay 
    //  kot.saleName  = 'staff1';         // recieve when login
    //  kot.status  = 'OPEN';             // 'OPEN'
    //  kot.type = 'DineIn';              // Dine In
    //  kot.orderNumber = 'Order0001';    //' Query and plus one
    //  kot.paymentTerm = '';             // ***************************payment;// 'CASH',
    //  kot.deliveryTime = 0;             // 30,
    //  kot.deliveryUnit = 'Minute';      //'Minute',
    //  kot.validDate = new Date();       // Date //'2019-03-19T13:43:21.270Z',
     
     kot.items = this.orderItems;
     
     console.log(JSON.stringify(kot));
     
     this.createNewKOT(kot);
   
     }
     
     
     cancle() {
     }
   
   
     public createNewKOT(newKOT: KotModel) {
   
       this.kotService.create(newKOT).subscribe(
         res => console.log(res),
           error => console.log(error)
         );
            }
       
       public deleteKOT(kot: KotModel) {
         this.kotService.delete(kot).subscribe(
           res => console.log(res)
         );
       
       
       }
 
}
