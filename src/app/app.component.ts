import { Component} from '@angular/core';
import { RadSideDrawerService } from './shared/ui-services/radside-drawer-service/radsidedrawer.service';


@Component({
  // providers: [DrawerService], // Very Important Don't forget
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  collapsed = true;
  username  = 'Surasak Kaewsiri';
  position  = 'Owner';
  profile   = '';
  email     = 'surasak.kaewsiri@gmail.com';
  private _activatedUrl: string;
// person: string[] = ['1', '2', '3'];
   constructor(private drawerService: RadSideDrawerService) {
      // Use the component constructor to inject services.
       this.drawerService.load();
      this.profile = this.username + ' ' + this.position;
   }
   toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  onNavItemTap(navItemRout: string) {
    this.drawerService.onNavItemTap(navItemRout);
    }

  isComponentSelected(url: string) {
    this.drawerService.isComponentSelected(url);
  }

}
