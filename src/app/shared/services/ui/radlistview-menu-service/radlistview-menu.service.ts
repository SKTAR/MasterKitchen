import { Injectable } from '@angular/core';
import { MenuModel } from '../../../models/menu.model';




@Injectable({providedIn: 'root'})
export class RadlistviewMenuService {
    
    public getMenuObservableArray(menuListByCategory: Array<MenuModel>) {
    }
    public getMenuItems() {
    }
    public getMenuItems2() {
    }
    public getMenuItems3() {
    }
     selectedItems() {

    }
    public onItemSelected(args): Array<MenuModel> {
        return null;
    }

    public onItemDeselected(args): Array<MenuModel> {
        return null;
    }
}