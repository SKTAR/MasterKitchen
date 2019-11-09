import { Component, OnInit, Input } from '@angular/core';
import { RadSideDrawerService } from '~/app/@core/models-services/ui/radside-drawer-service/radsidedrawer.service';
import { HomeMenuService } from '../../models-services/ui/home-menu/home-menu.service';

@Component({
  selector: 'app-actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.scss']
})
export class ActionbarComponent implements OnInit {

  @Input() pageName: string;
  constructor(private drawerService: RadSideDrawerService, private homeMenuService :HomeMenuService) {
  }


  ngOnInit() {
  }
  public showMenu() {
    this.drawerService.show();
  }

  public hideMenu() {
    this.drawerService.hide();
  }

  onPageLoaded(arg)
  {
    console.log(arg);
    this.homeMenuService.pageLoaded(arg);
  }
}