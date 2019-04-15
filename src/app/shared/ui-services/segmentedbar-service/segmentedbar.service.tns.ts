import { Injectable } from '@angular/core';
import { SegmentedBar, SegmentedBarItem } from 'tns-core-modules/ui/segmented-bar';
import { RouterExtensions } from 'nativescript-angular/router';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
@Injectable({providedIn: 'root'})
export class SegmentedBarService {

    public orderTypeItems: Array<SegmentedBarItem>;
    public orderTypeCaption = 'Dine In';
    dataItems = new ObservableArray<DataItem>();
    orderTypeList: any[] = ['Dine In', 'Take Away', 'Delivery' , 'Others'];


    private _templateSelector: (item: DataItem, index: number, items: any) => string;


    constructor(private routerExtensions: RouterExtensions) {
    }

    public getOrderTypeTab() {
            this.orderTypeItems = [];
            for (let i = 0; i < this.orderTypeList.length; i++) {
                const item = new SegmentedBarItem();
                item.title = this.orderTypeList[i];
                this.orderTypeItems.push(item);
            }
           return this.orderTypeItems;
        }
        public onSelectedIndexChange(args: { object: SegmentedBar; }) {
            const segmentedBar = <SegmentedBar>args.object;
            return this.orderTypeList[segmentedBar.selectedIndex];
        }

        public getRadListView() {
            for (let i = 0; i < 10; i++) {
                this.dataItems.push(new DataItem(i, 'Item ' + i, 'This is item description.'));
              }

              return this.dataItems;
        }



//#region RadListView



//#endregion

}


export class DataItem {
    public id: number;
    public name;
    public description;

    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
  }
