import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../../shared/kitchen-services/menu.service';
import { MenuModel} from '../../shared/kitchen-models/menu.model';
import { map } from 'rxjs/operators';

import { SegmentedBarService } from '../../shared/ui-services/segmentedbar-service/segmentedbar.service';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.scss'],
 
})
export class MenuCategoryComponent implements OnInit {
  page = 'Select Menu';
  menuIndex = 0;
  menuCategoryList;
  menuListString: string[] = [];
  menuCategorySegmentedBar; // Segment Bar UI  component List
 // for sharing to menu-by-category
  menuListByCategory: Array<MenuModel>;
  constructor(private menuService: MenuService,
              private segmentBarService: SegmentedBarService) {
              this.listAllCategory();
  }
    ngOnInit() {
    }


    public listAllCategory() {
            this.menuService.listCategories().pipe(map((response) =>  {
              return this.menuCategoryList = response;
            }))
            .subscribe((response) => {
            console.log(response);
            console.log('len' + this.menuCategoryList.length);
            this.menuCategorySegmentedBar =  this.segmentBarService.getSegmentBarTab(this.menuCategoryList);
        },
        error => {
            alert('Cannot get Menu Category' + error);
            console.log(error);
         });
      }

      onSelectedCategory(arg) {
        this.menuIndex = this.segmentBarService.onSelectedIndexChange(arg);
        // alert(this.menuCategorySegmentedBar[this.menuIndex]);
         const selecttab: string = this.menuCategorySegmentedBar[this.menuIndex].title;
         this.loadMenuByCategory(selecttab);
         for (let i = 0; i < this.menuListByCategory.length; i++) {
        // alert(this.menuListByCategory[i].partNumber+','+ this.menuListByCategory[i].price+','+this.menuListByCategory[i].sku);
         }
      }



    public loadMenuByCategory(category: string) {
      this.menuService.listMenuByCategory(category).subscribe(
        ((response: MenuModel[]) => {
            this.menuListByCategory = response;
          }));
    }

}

