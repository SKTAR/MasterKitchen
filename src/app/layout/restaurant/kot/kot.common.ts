import { Routes } from '@angular/router';
import { KotComponent } from './kot.component';
import { MenuSelectComponent } from '../select-menu/menu-select/menu-select.component';

export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '',
        component: KotComponent,
    },
    {
        path: 'menu',
        component: MenuSelectComponent,
    }
    
];
