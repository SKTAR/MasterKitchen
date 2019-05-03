import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './menu.routes';



// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
