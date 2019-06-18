import { Routes } from '@angular/router';
import { ViewmenuComponent } from './viewmenu.component';
import { MenucategoryComponent } from './menucategory/menucategory.component';
import { CreatemenuComponent } from './createmenu/createmenu.component';

export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '',
        component: ViewmenuComponent,
        children: [
           {
               path: 'menucategory' , component: MenucategoryComponent
           }
           ,    
           {
                path: 'createmenu' , component: CreatemenuComponent
           }
       ]
    }
];
