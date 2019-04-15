import { Routes } from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import { HomeComponent } from './home/home.component';
import { OrderfoodComponent } from './orderfood/orderfood.component';
import { ZonetableComponent } from './zonetable/zonetable.component';
import { MenuComponent } from './menu/menu.component';
import { LearningComponent } from './learning/learning.component';
import { NsRadlistviewComponent } from './ns-radlistview/ns-radlistview.component';
import { RadlistviewComponent } from './learning/ui-pro/radlistview/radlistview.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  {
    path: 'orderfood',
    component: OrderfoodComponent
  },
  {
      path: 'zonetable',
      component: ZonetableComponent,
  },
  {
    path: 'setting',
    component: SettingComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'learning',
    component: LearningComponent,
  },
  {
    path: 'ns-radlistview',
    component: NsRadlistviewComponent,
  }
  ,
  {
    path: 'radlistview',
    component: RadlistviewComponent,
  }

];
