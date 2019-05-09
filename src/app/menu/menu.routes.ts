import { Routes, RouterModule } from '@angular/router';
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { MenuComponent } from './menu.component';
import { IngredientComponent } from './ingredient/ingredient.component';



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
