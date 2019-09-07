import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MenuModel } from '~/app/@core/models-services/restaurant/menu.model';
import { CookingStationModel, StationModel, StationProduct } from '~/app/@core/models-services/restaurant/station.model';
import { StationService } from '~/app/@core/models-services/restaurant/station.service';
import { MenuService } from '~/app/@core/models-services/restaurant/menu.service';
import { UtilService } from '~/app/@core/models-services/ui/util/util.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {
  menuListByCategory: MenuModel[];
  menuCategoryList: any = [];
  station: StationModel;
  employee = ['Employee1', 'Employee2', 'Employee3', 'Employee4', 'Employee5'];
  // stationpicker = ['Station1', 'Station2', 'Station3', 'Station4', 'Station5'];
  employeeList = [];
  stationList: CookingStationModel[] = [];
  stationListPicker = [];
  // public myItems: RxObservable<Array<DataItem>>;
  isExpanded = false;

//#region Cooking Station

cookingStation: CookingStationModel;
productsInStation: StationProduct[];
categorySelected: string;

//#endregion


  constructor(private stationService: StationService,
              private menuService: MenuService,
              private util: UtilService) {

               


    this.cookingStation = new CookingStationModel(); // new
    this.cookingStation.products = [];
    
    this.station = new StationModel(); // Old 
    this.station.active = true;
    this.employeeList = [];
     this.listStation();
    this.listAllCategory();
    //#region Mobile
    //this.creatStationListMobile();
   
    //#endregion
  }

  ngOnInit() {
    
    this.stationService.refreshNeeded$.subscribe(() => {
        this.listStation();
    });

    this.listStation();
   
  }
//   onListViewLoaded(args): void {
//     this.listView = args.object;

//     if (isIOS) {
//         this.listView.iosEstimatedRowHeight = 0; // or your own preffered value
//     }
// }
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

  listStation() {
    this.stationService.list().pipe(map((response: CookingStationModel[]) =>  {
			return this.stationList = response;
		}))
		.subscribe((response) => {
      this.stationListPicker = response.map(x => x.name);
		console.log(response);
},
error => {
		alert('Cannot get Station List' + error);
		console.log(error);
 });
  }

  ListStationbyUID(uid: string) {
    alert(uid);
    this.stationService.getByUid(uid).pipe(map((response: CookingStationModel) =>  {
			return this.cookingStation = response;
		}))
		.subscribe((response) => {
     // this.stationListPicker = response.map(x => x.name);
		console.log(response);
},
error => {
		alert('Cannot get Station List' + error);
		console.log(error);
 });
  }

  createStation() {
     console.log(this.cookingStation);
      this.stationService.createStation(this.cookingStation).subscribe(
        res => console.log(res)
     );

  }
  removeStation() {
    if (this.station.uid == null) {
        const selectedStation =  this.stationList.find(x => x.name === this.cookingStation.name);
        this.stationService.deleteStation(selectedStation.uid).subscribe(res => console.log(res));
    }
    else {
      this.stationService.deleteStation(this.station.uid).subscribe(res => console.log(res));
    }
    
  }
  updateStation() {
    this.stationService.update(this.cookingStation.uid, this.cookingStation)
    .subscribe(res => console.log(res));
  }

  loadStation(uid: string) {
   console.log(uid);
   // const station =  this.staitonList.find(x => x.uid === uid);
   this.stationService.getByUid(uid).pipe(map((response: CookingStationModel) =>  {
    return this.cookingStation = response;
      }))
      .subscribe((response) => {
      console.log(response);
    },
    error => {
      alert('Cannot get Menu Category' + error);
      console.log(error);
    });

  }

  checkValue(args) {
    const switchOn: boolean = args.target.checked;
    this.station.active = switchOn;
     console.log('value: ' + switchOn);
    // console.log('value2'+val2);
  }
  addEmployee(args) {
    const employeeName = args.target.value;
    // alert(employeeName);
    this.employeeList.push(employeeName);
    console.log(this.employeeList);
  }
  removeEmployee(args) {
    const employeeName = args.target.value;
    // alert(employeeName);
    this.employeeList.splice(employeeName);
  }

  public loadMenuByCategory(category: string) {
    this.categorySelected = category
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

 customize(args) {
   // alert(id);
   this.isExpanded = true;
   this.util.getTextFromButton(args);

 }

//#region Cooking Station Model
addItemToStation(args,menuName: string,productCode: string)
{
  const prods  = new StationProduct();
  prods.name = menuName;
  prods.productCode=productCode;

  if(this.cookingStation.products.findIndex((prods) => prods.name === menuName) < 0) {
    this.cookingStation.products.push(prods); 
  }
  else{
    alert('item is already exist');
  }

 
}

removeMenuItem(args) {
  const menu = args.target.value;
  const removeIndex = this.cookingStation.products.findIndex(item => item === menu);
  // alert('index to be removed' + removeIndex);
  this.cookingStation.products.splice(removeIndex, 1);
  console.log(this.cookingStation.products);
}


//#endregion  cookingStationModel

//#region Mobile


    // creatStationListMobile() {
    //     let items = [];
    //     for (let i = 0; i < 3; i++) {
    //         items.push(new DataItem(i, 'data item ' + i));
    //     }

    //     let subscr;
    //     this.myItems = RxObservable.create(subscriber => {
    //         subscr = subscriber;
    //         subscriber.next(items);
    //         return function () {
    //             console.log('Unsubscribe called!');
    //         };
    //     });

    //     let counter = 2;
    //     let intervalId = setInterval(() => {
    //         counter++;
    //         items.push(new DataItem(counter + 1, 'data item ' + (counter + 1)));
    //         subscr.next(items);
    //     }, 1000);

    //     setTimeout(() => {
    //         clearInterval(intervalId);
    //     }, 15000);
    // }
//#endregion


//#region Dropdown


//#endregion

}
