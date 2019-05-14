import { Routes, RouterModule } from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import { HomeComponent } from './home/home.component';
import { OrderfoodComponent } from './orderfood/orderfood.component';
import { ZonetableComponent } from './zonetable/zonetable.component';
import { MenuCategoryComponent } from './menucategory/menucategory.component';
import { LearningComponent } from './learning/learning.component';
import { RadlistviewComponent } from './learning/ui-pro/radlistview/radlistview.component';
import { ButtonComponent } from './learning/ui/button/button.component';
import { GridComponent } from './learning/layouts/grid/grid.component';
import { FlexComponent } from './learning/layouts/flex/flex.component';
import { AbsoluteComponent } from './learning/layouts/absolute/absolute.component';
import { TabGridlayoutAutoRowComponent } from './learning/ui/tab-gridlayout-auto-row/tab-gridlayout-auto-row.component';
import { StationComponent } from './station/station.component';



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
    path: 'station',
    component: StationComponent
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
    path: 'menucategory',
    component: MenuCategoryComponent,
   },
  {
    path: 'menu',
    //component:MenuComponent
    //./menu/
    loadChildren: './menu/menu.module#MenuModule'

  }
  ,
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
  ,
  {
    path: 'autogrid',
    component: TabGridlayoutAutoRowComponent
  }
  ,
  {
    path: 'splitview',
    loadChildren: './splitview/splitview.module#SplitviewModule'
  }
  ,
  {
    path: 'detail',
    loadChildren: './detail/detail.module#DetailModule'
  }
  //{ path: "splitview", loadChildren: "./home/home.module#HomeModule" },
  //  { path: "detail", loadChildren: "./detail/detail.module#DetailModule" }
  //#endregion
];
