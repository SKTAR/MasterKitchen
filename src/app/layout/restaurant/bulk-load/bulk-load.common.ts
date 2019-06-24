import { Routes } from '@angular/router';
import { BulkLoadComponent } from './bulk-load.component';
import { MenuBulkLoadComponent } from './menu-bulk-load/menu-bulk-load.component';

export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '' ,
        component:  BulkLoadComponent,
        children:[
            {
                path:'menu-bulk-load' , component: MenuBulkLoadComponent
            },
        ]
    }
];
