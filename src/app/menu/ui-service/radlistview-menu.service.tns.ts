import { Injectable } from '@angular/core';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { RadListView, ListViewEventData } from 'nativescript-ui-listview';
import { MenuModel } from '../../shared/kitchen-models/menu.model';

@Injectable({providedIn: 'root'})
export class RadlistviewMenuService {
    dataItems = new ObservableArray<MenuModel>();
    img_folder = '~/assets/images/gallery/gallery';
    private _selectedItems: string;

    obsArray;
    
   
    
       selectedItems() {
        return this._selectedItems;
    }
    public onItemSelected(args: ListViewEventData):Array<MenuModel> {
     //   alert('Select Item');
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<MenuModel>;
        
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

    public onItemDeselected(args: ListViewEventData): Array<MenuModel> {
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<MenuModel>;
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



