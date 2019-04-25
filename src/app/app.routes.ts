import { Routes } from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import { HomeComponent } from './home/home.component';
import { OrderfoodComponent } from './orderfood/orderfood.component';
import { ZonetableComponent } from './zonetable/zonetable.component';
import { MenuComponent } from './menu/menu.component';
import { LearningComponent } from './learning/learning.component';
import { RadlistviewComponent } from './learning/ui-pro/radlistview/radlistview.component';
import { ButtonComponent } from './learning/ui/button/button.component';
import { GridComponent } from './learning/layouts/grid/grid.component';
import { FlexComponent } from './learning/layouts/flex/flex.component';
import { AbsoluteComponent } from './learning/layouts/absolute/absolute.component';

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
  //#region Learning
  {
    path: 'learning',
    component: LearningComponent,
  },
  {
    path: 'radlistview',
    component: RadlistviewComponent,
  }
  ,
  {
    path: 'button',
    component: ButtonComponent,
  },
  {
    path: 'grid',
    component: GridComponent
  }
  ,
  {
    path: 'flex',
    component: FlexComponent
  }
  ,
  {
    path: 'absolute',
    component: AbsoluteComponent
  }
  //#endregion
];
