import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { MenuCategoryComponent } from './menu-category/menu-category.component';

export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '',
        component: MenuComponent
    }
    ,
    {
        path: 'menu-category',
        component: MenuCategoryComponent
    }


];
