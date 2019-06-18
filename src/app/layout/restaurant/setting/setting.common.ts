import { Routes } from '@angular/router';
import { ZonetableComponent } from './zonetable/zonetable.component';
import { SettingComponent } from './setting.component';
import { CookstationComponent } from './cookstation/cookstation.component';


export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path : '',
        component: SettingComponent,
        children: [
            {
              path: 'cookstation' , component : CookstationComponent,
            },
            {
                path: 'zonetable' , component : ZonetableComponent,
            }
          ],
    }
];
