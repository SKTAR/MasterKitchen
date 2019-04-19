import { Component, OnInit } from '@angular/core';
import { RadSideDrawerService} from '../shared/ui-services/radside-drawer-service/radsidedrawer.service';
import { MenuService } from '../shared/kitchen-services/menu.service'
import { MenuItem, Recipe } from '../shared/kitchen-services/MenuItem';

@Component({
  // providers: [DrawerService],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  MenuInformation:any = [];
  page = 'Home';
  menuID = '';
  selectedCategory = '';

  menuItem: MenuItem;



  result: any;

  constructor(
    private drawerService: RadSideDrawerService,
    private menuService: MenuService
  ) {
    // Initialise Service Example Information
    this.menuService.get().subscribe(
      res => {this.MenuInformation = res;
      console.log(JSON.stringify(this.MenuInformation)); }
    );
   }

  ngOnInit(): void {
    this.menuItem = new MenuItem();
  }

  public showMenu() {
    this.drawerService.show();
  }

  public hideMenu() {
    this.drawerService.hide();
  }

  public createNewMenu(item: MenuItem) {
      this.menuService.create(item).subscribe(res => {
        this.result = res;
        console.log(JSON.stringify(this.result));
    },
    error => {
      console.log('Error', error);
    });
  }

  public deleteMenuItem(id: string) {
    this.menuService.delete(id).subscribe(res => {
      this.result = res;
      console.log(JSON.stringify(this.result));
  },
  error => {
    console.log('Error', error);
  });
  }



  public setMenuCategory(category: string) {
    this.selectedCategory = category;
    alert(this.selectedCategory);
  }

  public getMenubyID(id: any){
    // this.menuService.getOne(id).subscribe(res => this.MenuInformation = res);
    this.menuService.getOne(id).subscribe(res => {
      this.MenuInformation = res;
      console.log(JSON.stringify(this.MenuInformation));
  },
  error => {
    console.log('Error', error);
  });
  }


}
