import { Component, OnInit } from '@angular/core';
import { RadSideDrawerService} from '../shared/ui-services/radside-drawer-service/radsidedrawer.service';

import { MenuService } from '../shared/kitchen-services/menu.service'

@Component({
  // providers: [DrawerService],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  MenuInformation:any = [];
  page = 'Home';

  constructor(
    private drawerService: RadSideDrawerService,
    private menuService: MenuService
  ) {
    // Initialise Service Example Information
    this.menuService.get().subscribe(
      res => this.MenuInformation = res
    )
  }

  ngOnInit(): void {
      
  }
  public showMenu() {
    this.drawerService.show();
  }

  public hideMenu() {
    this.drawerService.hide();
  }


}
