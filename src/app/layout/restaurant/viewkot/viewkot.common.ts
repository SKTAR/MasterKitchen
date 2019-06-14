import { Routes } from '@angular/router';
import { ViewkotComponent } from './viewkot.component';
import { SplitviewKotComponent } from './splitview-kot/splitview-kot.component';

export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '' , component: ViewkotComponent
    },
    {
        path: 'splitview-kot' , component: SplitviewKotComponent
    }

];
