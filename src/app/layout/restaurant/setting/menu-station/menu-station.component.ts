import { Component, OnInit, Input } from '@angular/core';
import { StationService } from '../../../../shared/services/restaurant/station.service';
import { MenuService } from '../../../../shared/services/restaurant/menu.service';
import { MenuModel } from '../../../../shared/models/menu.model';
import { UtilService } from '../../../../shared/services/ui/util/util.service';
import { map } from 'rxjs/operators';
import { CookingStationModel } from '../../../../shared/models/station.model';

@Component({
  selector: 'app-menu-station',
  templateUrl: './menu-station.component.html',
  styleUrls: ['./menu-station.component.scss']
})
export class MenuStationComponent implements OnInit {
  @Input() category: string;
  menuListByCategory: MenuModel[]=[];
  stationListPicker =[];
   constructor(private stationService: StationService,
     private menuService: MenuService,
    private util: UtilService) {
      if (this.category !== null) {
        this.loadMenuByCategory();
      }

     }
   ngOnInit() {
   }
  public loadMenuByCategory() {
  
    this.menuService.listCategoryByName(this.category).pipe(map((response: MenuModel[]) =>  {
     return this.menuListByCategory = response;
   }))
    .subscribe((response) => {
    
       console.log( response);
     },
  error => {
       alert('Cannot get MenuItems ' + error);
       console.log('error');
       console.log(error);
  });
 }

 listStation() {
  this.stationService.list().pipe()
    .subscribe((response: CookingStationModel[]) => {
      this.stationListPicker = response.map(x => x.name);
      // this.stationListPicker.unshift('Select Station')
     // console.log(response);
    },
      error => {
        alert('Cannot get Station List' + error);
        console.log(error);
      });
}
}
