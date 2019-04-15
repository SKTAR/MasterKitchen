import { Component, OnInit } from '@angular/core';
import { RadSideDrawerService} from '../shared/ui-services/radside-drawer-service/radsidedrawer.service';

@Component({
  // providers: [DrawerService],
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  page = 'Setting';
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
