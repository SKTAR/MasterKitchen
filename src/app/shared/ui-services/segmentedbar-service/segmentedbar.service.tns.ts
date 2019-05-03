import { Injectable } from '@angular/core';
import { SegmentedBar, SegmentedBarItem } from 'tns-core-modules/ui/segmented-bar';
import { RouterExtensions } from 'nativescript-angular/router';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Page, Observable } from 'tns-core-modules/ui/page/page';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Label } from 'tns-core-modules/ui/label';

    
@Injectable({providedIn: 'root'})
export class SegmentedBarService {

    public segmentBarItem: Array<SegmentedBarItem>;
    dataItems = new ObservableArray<DataItem>();
    orderTypeList: string[] = ['Dine In', 'Take Away', 'Delivery' , 'Others'];


    private _templateSelector: (item: DataItem, index: number, items: any) => string;


    constructor(private routerExtensions: RouterExtensions) {
    
    }

    public onLoad(arg) {
        const element = arg.nativeElement;
        const page = element.page;
        // set up the SelectedBar selected index
        const vm = new Observable();
        vm.set("prop", 0);
        vm.set("selectedIndex", 0);
        vm.set("visibility0", true);
        vm.set("visibility1", false);
        vm.set("visibility2", false);
        vm.set("visibility3", false);
        page.bindingContext = vm;
    }
  
    public getSegmentBarTab(itemList: string[]) {
        this.segmentBarItem  = []; // very important initial before do anything
        for (let i = 0; i < itemList.length; i++) {
                const item = new SegmentedBarItem();
                item.title = itemList[i];
                this.segmentBarItem.push(item);
            }
           return this.segmentBarItem;
        }
        public onSelectedIndexChange(args: { object: SegmentedBar; }): number {
            const segmentedBar = <SegmentedBar>args.object;
           // return this.orderTypeList[segmentedBar.selectedIndex];
           return segmentedBar.selectedIndex;
        }

        public getRadListView() {
            for (let i = 0; i < 10; i++) {
                this.dataItems.push(new DataItem(i, 'Item ' + i, 'This is item description.'));
              }

              return this.dataItems;
        }
        
        public onNavigatingTo(args) {
           
        }


        public generateView(args: { object: SegmentedBar; }, index: number) {
            const segmentedBar = <SegmentedBar>args.object;
            const pageView = segmentedBar.page;
            
            const vm = new Observable();
            const selectedIndex = (<SegmentedBar>args.object).selectedIndex;
            vm.set("prop", selectedIndex);
     
            // #region  Select
              // set up the SelectedBar selected index
          //  const vm = new Observable();
        //    vm.set('prop', index);
           // vm.set('selectedIndex', index);
            console.log('index tns:' + index);
            const vtrue = 'visibility' + index;
            vm.set(vtrue, true);
            console.log('true:' + vtrue);
          for (let i = 0; i < segmentedBar.items.length ; i++) {
            if (i !== index) {
                 const vfalse = 'visibility' + i;
                vm.set(vfalse, false);
                console.log('false:'+ vfalse);
            }

        }   
            // vm.set('visibility1', false);
            // vm.set('visibility2', false);
            // vm.set('visibility3', false);
        
            pageView.bindingContext = vm;
            // #endregion    

            // const stack = <StackLayout>pageView.getViewById('chatbox');
            // const label = new Label();
            // label.text = 'My New Label';
            // stack.addChild(label);


            // pageView.bindingContext = vm;
          
          
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
