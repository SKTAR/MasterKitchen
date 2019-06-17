import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';


export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'kot', loadChildren: './restaurant/kot/kot.module#KotModule' },
            { path: 'stock', loadChildren: './restaurant/stock/stock.module#StockModule' },
            { path: 'select-menu', loadChildren: './restaurant/select-menu/select-menu.module#SelectMenuModule' },
            { path: 'station', loadChildren: './restaurant/station/station.module#StationModule' },
            { path: 'zonetable', loadChildren: './restaurant/setting/setting.module#SettingModule' },
            { path: 'kds', loadChildren: './restaurant/kds/kds.module#KdsModule' },
            { path: 'viewkot', loadChildren: './restaurant/viewkot/viewkot.module#ViewkotModule' },
            { path: 'viewmenu', loadChildren: './restaurant/viewmenu/viewmenu.module#ViewmenuModule' },
            
                 ]
    }
];
