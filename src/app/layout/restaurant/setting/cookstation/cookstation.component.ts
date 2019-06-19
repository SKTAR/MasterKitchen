import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SelectedIndexChangedEventData } from 'nativescript-drop-down';
import { StationModel, CookingStationModel, StationProduct } from '../../../../shared/models/station.model';
import { StationService } from '../../../../shared/services/restaurant/station.service';
import { MenuService } from '../../../../shared/services/restaurant/menu.service';
import { map } from 'rxjs/operators';
import { MenuModel } from '../../../../shared/models/menu.model';
import { UtilService } from '../../../../shared/services/ui/util/util.service';
import { DialogService } from '../../../../shared/services/ui/dialog/dialog.service';

@Component({
  selector: 'app-cookstation',
  templateUrl: './cookstation.component.html',
  styleUrls: ['./cookstation.component.scss']
})
export class CookstationComponent implements OnInit {
  menuListByCategory: MenuModel[];
  menuCategoryList: string[] = [];

  stationList: CookingStationModel[] = [];
  stationListPicker = [];
  isExpanded = false;

//#region Cooking Station

cookingStation: CookingStationModel;
productsInStation: StationProduct[];
categorySelected: string;

//#endregion

  public selectedIndex = 1;
  public items: Array<string>;
  @ViewChild('dd') dropDown: ElementRef;
  constructor(private stationService: StationService,
    private menuService: MenuService,
    private util: UtilService,
    private dialog: DialogService) {

     


this.cookingStation = new CookingStationModel(); // new
this.cookingStation.products = [];

this.listStation();
this.listAllCategory();

}

ngOnInit() {

this.stationService.refreshNeeded$.subscribe(() => {
this.listStation();
});

this.listStation();

}

  public listAllCategory() {
		this.menuService.listCategories().pipe(map((response:string[]) =>  {
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
   // this.stationListPicker.unshift('Select Station')
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

  addNewStation() {
    this.dialog.prompt();
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

 }
  //#region DropDown
  public onchange(args: SelectedIndexChangedEventData) {
    console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
    
  }
  
  public onopen() {
    console.log("Drop Down opened.");
  }
  
  public onclose() {
    console.log("Drop Down closed.");
  }


  //#endregion


  
}
