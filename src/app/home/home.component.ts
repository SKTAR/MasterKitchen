import { Component, OnInit } from '@angular/core';
import { RadSideDrawerService} from '../shared/ui-services/radside-drawer-service/radsidedrawer.service';
@Component({
  // providers: [DrawerService],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  page = 'Home';
  constructor(private drawerService: RadSideDrawerService) {
  }

ngOnInit(): void {
    // Init your component properties here.
}


  public showMenu() {
    this.drawerService.show();
  }

  public hideMenu() {
    this.drawerService.hide();
  }


}
