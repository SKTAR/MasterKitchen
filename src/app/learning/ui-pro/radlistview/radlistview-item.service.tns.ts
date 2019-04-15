import { Injectable } from '@angular/core';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { RadListView, ListViewEventData } from 'nativescript-ui-listview';
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
export class RadlistviewItemService {
    dataItems = new ObservableArray<MenuItems>();
    img_folder = '~/assets/images/gallery/gallery';
    private _selectedItems: string;
    public getMenuItems() {
        for (let i = 1; i < 10; i++) {
            this.dataItems.push(new MenuItems(i, 'Menu ' + i, 'This is item description.', this.img_folder + i + '.jpg'));
          }

          return this.dataItems;
    }

     selectedItems() {
        return this._selectedItems;
    }
    public onItemSelected(args: ListViewEventData) {
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<MenuItems>;
        let selectedTitles = 'Selected items: ';
        for (let i = 0; i < selectedItems.length; i++) {
            selectedTitles += selectedItems[i] ? selectedItems[i].name : '';

            if (i < selectedItems.length - 1) {
                selectedTitles += ', ';
            }
        }

        this._selectedItems = selectedTitles;
        const selectedItem = this.dataItems.getItem(args.index);
        console.log('Item selected: ' + (selectedItem && selectedItem.name));
        alert(selectedItem && selectedItem.name);
    }

    public onItemDeselected(args: ListViewEventData) {
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<MenuItems>;
        if (selectedItems.length > 0) {
            let selectedTitles = 'Selected items: ';
            for (let i = 0; i < selectedItems.length; i++) {
                selectedTitles += selectedItems[i] ? selectedItems[i].name : '';

                if (i < selectedItems.length - 1) {
                    selectedTitles += ', ';
                }
            }

            this._selectedItems = selectedTitles;
        } else {
            this._selectedItems = 'No Selected items.';
        }

        const deselectedItem = this.dataItems.getItem(args.index);
        console.log('Item deselected: ' + (deselectedItem && deselectedItem.name));
    }
}



