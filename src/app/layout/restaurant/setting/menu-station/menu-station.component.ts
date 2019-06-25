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
  @Input() image: string;
  img_folder = '~/assets/images/gallery/gallery';
   constructor(private stationService: StationService,
     private menuService: MenuService,
    private util: UtilService) {
      if (this.category !== null) {
      }

     }
   
  ngOnInit() {
   }
 
}
