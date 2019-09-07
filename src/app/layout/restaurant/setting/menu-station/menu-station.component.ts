import { Component, OnInit, Input } from '@angular/core';
import { MenuModel } from '~/app/@core/models-services/restaurant/menu.model';
import { StationService } from '~/app/@core/models-services/restaurant/station.service';
import { MenuService } from '~/app/@core/models-services/restaurant/menu.service';
import { UtilService } from '~/app/@core/models-services/ui/util/util.service';


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
