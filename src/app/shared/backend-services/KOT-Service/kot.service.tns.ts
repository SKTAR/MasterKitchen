import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class KOTService {

    orderTypeList: string[] = [];
    menuCategoryList: string[];
    constructor() {
    }

    getOrderTypeList(): string[] {
        this.orderTypeList = ['Dine In', 'Take Away', 'Delivery' , 'Others'];
        return this.orderTypeList;
    }

    getMenuCategoryList(): string[] {
        this.menuCategoryList = ['ของดีเมืองอุบล', 'ส้มตำ', 'ทานเล่น' , 'ต้ม', 'แจ่ว', 'ลาบ', 'น้ำพริก'];
        return this.menuCategoryList;
    }

}



