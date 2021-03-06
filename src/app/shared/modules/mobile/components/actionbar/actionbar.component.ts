import { Component, OnInit, Input } from '@angular/core';
import { RadSideDrawerService } from '../../../../services/ui/radside-drawer-service/radsidedrawer.service';

@Component({
  selector: 'app-actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.scss']
})
export class ActionbarComponent implements OnInit {

  @Input() pageName: string;
  constructor(private drawerService: RadSideDrawerService) {
  }


  ngOnInit() {
  }
  public showMenu() {
    this.drawerService.show();
  }

  public hideMenu() {
    this.drawerService.hide();
  }
}
