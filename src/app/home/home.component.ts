import { Component, OnInit } from '@angular/core';
import { RadSideDrawerService} from '../shared/ui-services/radside-drawer-service/radsidedrawer.service';
import { MenuService } from '../shared/kitchen-services/menu.service';
import { map, filter } from 'rxjs/operators';
import { MenuModel } from '../shared/kitchen-models/menu.model';


@Component({
  // providers: [DrawerService],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  MenuInformation: any = [];
  page = 'Home';
  menuID = '';
  selectedCategory = '';


it:MenuModel = new MenuModel();
  url = '';
  result: any;
  constructor (private drawerService: RadSideDrawerService,
                private menuService: MenuService
               ) {

    this.menuService.list().subscribe(
        (res: MenuModel[]) => { 
        this.MenuInformation = res;
        console.log(res);
    });
   }

  ngOnInit(): void {
  }

  public showMenu() {
    this.drawerService.show();
  }

  public hideMenu() {
    this.drawerService.hide();
  }

  public createNewMenu(item) {
    //   this.menuService.create(item).subscribe(res => {
    //     this.result = res;
    //     console.log(JSON.stringify(this.result));
    // },
    // error => {
    //   console.log('Error', error);
    // });
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

  public getMenubyID(id: any) {
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
