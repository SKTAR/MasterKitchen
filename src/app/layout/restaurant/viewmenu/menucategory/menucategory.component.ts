import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../../shared/services/restaurant/menu.service';
import { MenuModel } from '../../../../shared/models/menu.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menucategory',
  templateUrl: './menucategory.component.html',
  styleUrls: ['./menucategory.component.scss']
})
export class MenucategoryComponent implements OnInit {

  menuListByCategory: MenuModel[];
  menuCategoryList;
  constructor(private menuService: MenuService) { 
    this.listAllCategory();
  }

  ngOnInit() {
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

 removeItem(args) {
  alert(args.target.value);
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
 
}
