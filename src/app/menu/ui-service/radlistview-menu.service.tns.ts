import { Injectable } from '@angular/core';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { RadListView, ListViewEventData } from 'nativescript-ui-listview';
import { Menu } from '../../shared/kitchen-models/menu.model';
export class MenuItems {
    public id: number;
    public name;
    public imgPath;
    public description;

    constructor(id: number, name: string, description: string , img: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imgPath = img;
    }
  }

@Injectable({providedIn: 'root'})
export class RadlistviewMenuService {
    dataItems = new ObservableArray<Menu>();
    img_folder = '~/assets/images/gallery/gallery';
    private _selectedItems: string;

    obsArray;
    
   
    
       selectedItems() {
        return this._selectedItems;
    }
    public onItemSelected(args: ListViewEventData):Array<Menu> {
     //   alert('Select Item');
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<Menu>;
        
       // let selectedTitles = 'Selected items: ';
       
        if(selectedItems == null){
            alert('CRAP!!!');
        }

        for (let i = 0; i < selectedItems.length; i++) {
            // selectedTitles += selectedItems[i] ? selectedItems[i].name : '';

            // if (i < selectedItems.length - 1) {
            //     selectedTitles += ', ';
            // }

            alert('item:'+i+'-- price'+ selectedItems[i].price);
        }

       // this._selectedItems = selectedTitles;
        //const selectedItem = this.dataItems.getItem(args.index);
        //console.log('Item selected: ' + (selectedItem && selectedItem.name));
        //alert(selectedItem && selectedItem.name);
        return selectedItems;
    }

    public onItemDeselected(args: ListViewEventData): Array<Menu> {
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<Menu>;
        // if (selectedItems.length > 0) {
        //     let selectedTitles = 'Selected items: ';
        //     for (let i = 0; i < selectedItems.length; i++) {
        //         selectedTitles += selectedItems[i] ? selectedItems[i].name : '';

        //         if (i < selectedItems.length - 1) {
        //             selectedTitles += ', ';
        //         }
        //     }

        //     this._selectedItems = selectedTitles;
        // } else {
        //     this._selectedItems = 'No Selected items.';
        // }

        // const deselectedItem = this.dataItems.getItem(args.index);
       // console.log('Item deselected: ' + (deselectedItem && deselectedItem.name));
            return selectedItems;

    }
}



