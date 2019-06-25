import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { LocalDataService } from '../../../../shared/services/localdata.service';
import { MenuService } from '../../../../shared/services/restaurant/menu.service';
import { MenuModel } from '../../../../shared/models/menu.model';

@Component({
  selector: 'app-linkstation',
  templateUrl: './linkstation.component.html',
  styleUrls: ['./linkstation.component.scss']
})
export class LinkstationComponent implements OnInit {

  images = [];
  imageSelected = '';
  menuCategoryList: string[] = [];
  @Input() menuListByCategory: Array<MenuModel>; 
  categorySelected = '';
  constructor(private localService: LocalDataService,
              private menuService: MenuService) {
    this.images = this.localService.getImageStringArray();
    this.listAllCategory();
  }

  ngOnInit() {
  }
  onLoaded(args) {
  }

  public listAllCategory() {
    this.menuService.listCategories().pipe(map((response: string[]) => {
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
  public selectCategory(index: number) {
    this.menuListByCategory = [];
    this.imageSelected = this.images[index];
    this.categorySelected = this.menuCategoryList[index];
    // alert('index:'+index+' ,Sected :'+this.categorySelected );
   if(this.categorySelected != null) {
     console.log('start load by category');
    this.loadMenuByCategory();
    
  }
 }
  public loadMenuByCategory() {
  
    this.menuService.listCategoryByName(this.categorySelected).pipe(map((response: MenuModel[]) =>  {
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

//  listStation() {
//   this.stationService.list().pipe()
//     .subscribe((response: CookingStationModel[]) => {
//       this.stationListPicker = response.map(x => x.name);
//       // this.stationListPicker.unshift('Select Station')
//      // console.log(response);
//     },
//       error => {
//         alert('Cannot get Station List' + error);
//         console.log(error);
//       });
// }
}
