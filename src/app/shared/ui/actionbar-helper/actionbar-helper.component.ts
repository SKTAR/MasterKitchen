import { Component, OnInit, Input } from '@angular/core';
import { RadSideDrawerService } from '../../ui-services/radside-drawer-service/radsidedrawer.service';

@Component({
  selector: 'app-actionbar-helper',
  templateUrl: './actionbar-helper.component.html',
  styleUrls: ['./actionbar-helper.component.scss']
})
export class ActionbarHelperComponent implements OnInit {

  @Input() pageName: string;
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
