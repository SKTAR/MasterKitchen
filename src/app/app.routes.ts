import { Routes} from '@angular/router';
import { AuthGuard } from './shared/guard';
import { KotComponent } from './restaurant/kot/kot.component';
import { HomeComponent } from './restaurant/home/home.component';
import { OrderfoodComponent } from './restaurant/orderfood/orderfood.component';
import { MenulistComponent } from './restaurant/menulist/menulist.component';



export const routes: Routes = [

 //#region DashBoard
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' },
    { path: 'menulist', component: MenulistComponent},
    // { path: 'restaurant', loadChildren: './restaurant/restaurant.module#restaurantModule' },
];


export const routes2: Routes = [
      { path: '', component: HomeComponent },
      { path: 'orderfood', component: OrderfoodComponent },
      { path: 'kot', component: KotComponent},
      { path: 'menulist', component: MenulistComponent},
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
      { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
      { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
      { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
      { path: '**', redirectTo: 'not-found' },
     // { path: 'restaurant', loadChildren: './restaurant/restaurant.module#restaurantModule' },
  ];
