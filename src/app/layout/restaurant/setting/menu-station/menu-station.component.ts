import { Component, OnInit, Input } from '@angular/core';
import { StationService } from '../../../../shared/services/restaurant/station.service';
import { MenuService } from '../../../../shared/services/restaurant/menu.service';
import { MenuModel } from '../../../../shared/models/menu.model';
import { UtilService } from '../../../../shared/services/ui/util/util.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menu-station',
  templateUrl: './menu-station.component.html',
  styleUrls: ['./menu-station.component.scss']
})
export class MenuStationComponent implements OnInit {
//   @Input() categorySelected: string;
//   menuListByCategory: MenuModel[];
   constructor(private stationService: StationService,
     private menuService: MenuService,
    private util: UtilService) {
//       if(this.categorySelected !== null) {
//       this.loadMenuByCategory();
//       }
     }
   ngOnInit() {
   }
//   public loadMenuByCategory() {
//     console.log('method load by category :'+ this.categorySelected);
//     this.menuService.listCategoryByName(this.categorySelected).pipe(map((response: MenuModel[]) =>  {
//      return this.menuListByCategory = response;
//    }))
//     .subscribe((response) => {
    
//        console.log( response);
//      },
//   error => {
//        alert('Cannot get MenuItems ' + error);
//        console.log('error');
//        console.log(error);
//   });
//  }
}
