import { Component, OnInit } from '@angular/core';
import { MenuModel } from '../../../shared/models/menu.model';
import { KDS, KotModel } from '../../../shared/models/kot.model';
import { RouterHelperService } from '../../../shared/services/router-helper/router-helper.service';
import { PlatformService } from '../../../shared/platform.service';
import { KOTService } from '../../../shared/services/restaurant/kot.service';
import { MenuService } from '../../../shared/services/restaurant/menu.service';
import { NavigationExtras } from '@angular/router';
import { map, filter, flatMap } from 'rxjs/operators';
import { SegmentedBarService } from '../../../shared/services/ui/segmentedbar-service/segmentedbar.service';

@Component({
  selector: 'app-viewkot',
  templateUrl: './viewkot.component.html',
  styleUrls: ['./viewkot.component.scss']
})
export class ViewkotComponent implements OnInit {

   //isTablet: boolean = device.deviceType === DeviceType.Tablet;
   isTablet = false;
   
   selected = {};
   orderTypeSegmentBarList; // SegmentBar UI Component List
   
 menuItem : MenuModel;
 viewKotTabNameList; 
 page = 'Billing';
 orderList: KotModel[] = [];
 selectedOrder: KotModel;

 data = [];

 constructor(private router: RouterHelperService, private checkType: PlatformService,
  private kotService: KOTService,  private menuService: MenuService,  private segmentedService: SegmentedBarService) {
   this.viewKotTabNameList  = this.kotService.getViewKotTabList(); // = ['Show All', 'Dine In' , 'Take Away' , 'Delivery', 'Others']; //
  console.log(this.viewKotTabNameList);
  this.orderTypeSegmentBarList = segmentedService.getSegmentBarTab(this.viewKotTabNameList);

  this.data.push({ heading: "Bulbasaur", content: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger." });
  this.data.push({ heading: "Ivysaur", content: "To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon." });
  this.data.push({ heading: "Venusaur", content: "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people." });
  this.data.push({ heading: "Charmander", content: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely." });
  this.data.push({ heading: "Charmeleon", content: "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color." });
  this.data.push({ heading: "Charizard", content: "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself." });
  this.data.push({ heading: "Squirtle", content: "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds." });
  this.data.push({ heading: "Wartortle", content: "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler." });
  this.data.push({ heading: "Blastoise", content: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet." });

}
  ngOnInit(): void {
  this.listAllOrder();
  this.onSelectKotItem(Event);
  }
 
   //#region Mobile
   onSelectedSegment(args) { // select Tab
    const tabIndex = this.segmentedService.onSelectedIndexChange(args);
    //alert(tabIndex);
   //const temp = this.listAllOrder();
    if (tabIndex === 0) { // Show All
      this.listAllOrder();
    }
    if (tabIndex === 1) { // Dine In
      
      for (let key in this.orderList) {
        
      }
     
    
    }
    if (tabIndex === 2) { // Take Away
      this.orderList =[];
    
    }
    if (tabIndex === 3) { // Delivery
      this.orderList =[];
    }
    if (tabIndex === 4) { // Others
      this.orderList =[];
    }
   }
  //#endregion

  onButtonTap() {

  }
   
  onSelectKotItem(args) { // select Kitchen Order Token
    this.selectedOrder = new KotModel();
    
    this.selectedOrder = this.orderList[args.index];
      console.log('--------------------------------------');
      console.log(this.selectedOrder);
     // alert(this.selectedOrder['subTotal']);
     
      // For phone users we need to navigate to another page to show the detail view.
      if (!this.isTablet) {

        const navigationExtras: NavigationExtras = {
          queryParams: { selected: JSON.stringify(this.selected)}
        };
          this.router.goToPage('splitview-kot', navigationExtras);
          }
      }
 
 
   onLoaded(args) {
    this.checkType.checkPlatformType(args);
    this.isTablet = this.checkType.checkIsTablet();
    console.log('Is Table true or false' + this.isTablet);

    this.selectedOrder = new KotModel();
    if (!this.isTablet) {
 
      const navigationExtras: NavigationExtras = {
        queryParams: { selected: JSON.stringify(this.selected)}
      };
        this.router.goToPage('splitview-kot', navigationExtras);
        }
   }
   getMenubyId(id: string) {
     console.log('get test:'+ id);
     return this.menuService.getByUid(id).pipe(map(
       (response: MenuModel) => 
       { response.name;
     console.log(response);}
     ));
    
   
 
    // return this.http.get('server/page/auth').map(res => res.message === 'success');
   }
   getName() {
     return 'test';
   }
 
   listAllOrder() {
     this.kotService.list().pipe(map((response: KotModel[]) =>  {
       return this.orderList = response;
     }))
     .subscribe((response) => {
       console.log('Order List');
       console.log(response);
 
 },
 error => {
     alert('Cannot get Order List' + error);
     console.log(error);
  });
   }
   
   


   selectOrderItem(args){
     const id = args.index;
     const kdsItem = this.orderList[id];
     // kdsItem['subTotal'];
 
     alert('id:' + id);
     this.kotService.getByUid(id).pipe(map((response: KotModel) =>  {
       return this.selectedOrder = response;
     }))
     .subscribe((response) => {
       console.log('Selected Order:');
       console.log(response);
 
 },
 error => {
     alert('Cannot get Order List' + error);
     console.log(error);
  });
   }
 

}
