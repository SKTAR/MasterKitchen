import { Component, OnInit } from '@angular/core';
import { RadSideDrawerService} from '../shared/ui-services/radside-drawer-service/radsidedrawer.service';
import { MenuService } from '../shared/kitchen-services/menu.service';
import { MenuItem, Recipe } from '../shared/kitchen-services/MenuItem';
import { FakeHttpService } from '../shared/backend-services/test.service';
import { map, filter } from 'rxjs/operators';
import { User } from '../shared/backend-services/IUser';

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

  menuItem: MenuItem;

   user: User[];
  url = '';
  result: any;
  constructor
    (private drawerService: RadSideDrawerService,
    private menuService: MenuService,
    private fakeService: FakeHttpService
  ) {
    // Initialise Service Example Information
 /*  this.menuService.get().subscribe(
      res => {this.MenuInformation = res;
      console.log(JSON.stringify(this.MenuInformation)); }
    );
 this.fakeService.testGet().subscribe({
        next(response) { console.log('next' + response); },
        error(err) { console.error('Error: ' + err); },
        complete() { console.log('Completed'); }
      });
*/


    // this.TestGetTypeUser();
      this.TestFilter();
    }

  ngOnInit(): void {
    this.menuItem = new MenuItem();
  }

  public TestGet() {
    this.fakeService.testGet().subscribe(data => console.log(data));
  }


  public TestGetTypeUser() {
    this.fakeService.testGet()
    .pipe(
      map(response => this.result = response)
    ).subscribe(data => console.log('map :' + data));
  }

  public TestFilter() {
    this.fakeService.testGetUser()
    .pipe(
      filter(response => response.id  > 2)
    ).subscribe(data => console.log('map :' + data.id));
  }

  public TestMapRxjs() {
    this.fakeService.testGet().pipe(
      map(response => this.result = response)
    ).subscribe(data => console.log('map :' + data));
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

    public getMenubyFilterPrice() {
      this.menuService.get().subscribe({
        next(response) { console.log(response); },
        error(err) { console.error('Error: ' + err); },
        complete() { console.log('Completed'); }
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
