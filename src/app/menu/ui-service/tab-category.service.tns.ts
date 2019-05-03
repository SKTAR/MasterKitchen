import { Injectable, Input } from '@angular/core';
import { alert } from 'tns-core-modules/ui/dialogs';
import { SelectedIndexChangedEventData } from 'tns-core-modules/ui/tab-view';


@Injectable({providedIn: 'root'})
export class TabMenuCategoryService {
   
  
    public tabSelectedIndex: number;
    public tabSelectedIndexResult: string;
    constructor() {
    }
    onSelectedIndexChanged(args: SelectedIndexChangedEventData): number {
        if (args.oldIndex !== -1) {
            const newIndex = args.newIndex;
            if (newIndex === 0) {
                this.tabSelectedIndexResult = 'Profile Tab (tabSelectedIndex = 0 )';
            } else if (newIndex === 1) {
                this.tabSelectedIndexResult = 'Stats Tab (tabSelectedIndex = 1 )';
            } else if (newIndex === 2) {
                this.tabSelectedIndexResult = 'Settings Tab (tabSelectedIndex = 2 )';
            }
            alert(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`)
                .then(() => {
                    console.log('Dialog closed!');
                });
         return newIndex;
        }
    }
}