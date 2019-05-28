import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { RoutingHelperService } from '../shared/router-helper/routing-helper.service';
import { PlatformService } from '../shared/platform.service';
import { StationService } from '../shared/kitchen-services/station.service';
import { Station } from '../shared/common-model/station.model';
import { map } from 'rxjs/operators';
import { KOTService } from '../shared/kitchen-services/kot.service';
import { KDS } from '../shared/common-model/kot.model';

@Component({
  selector: 'app-kds',
  templateUrl: './kds.component.html',
  styleUrls: ['./kds.component.scss']
})
export class KdsComponent implements OnInit {

   //isTablet: boolean = device.deviceType === DeviceType.Tablet;
   isTablet = false;
    data = [];
    selected = {};
  stationList: Station[];
  stationName: string[];
  page = 'Kitchen & Station Display';
  orderList: KDS[] = [];
  selectedOrder: KDS;
    constructor(private router: RoutingHelperService,
                private checkType: PlatformService,
                private stationService: StationService,
                private kotService: KOTService) {}

    select(args) {
        this.selected = this.stationList[args.index];
        this.checkType.checkPlatformType(args);
        this.isTablet = this.checkType.checkIsTablet();
        console.log('Is Table true or false' + this.isTablet);
        // For phone users we need to navigate to another page to show the detail view.
        if (!this.isTablet) {

          const navigationExtras: NavigationExtras = {
            queryParams: { selected: JSON.stringify(this.selected)}
          };
            this.router.goToPage('detail', navigationExtras);
            }
        }

    

    ngOnInit(): void {
       
      this.listStation();
      this.listOrder();
      
      // this.data.push({
      //       name: 'Bulbasaur',
      //       src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      //       description: 'Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.'
      //   });
      //   this.data.push({
      //       name: 'Ivysaur',
      //       src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      //       description: 'To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon.'
      //   });
      //   this.data.push({
      //       name: 'Venusaur',
      //       src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      //       description: 'There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.'
      //   });
      //   this.data.push({
      //       name: 'Charmander',
      //       src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      //       description: 'The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.'
      //   });
      //   this.data.push({
      //       name: 'Charmeleon',
      //       src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
      //       description: 'Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.'
      //   });
      //   this.data.push({
      //       name: 'Charizard',
      //       src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      //       description: 'Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.'
      //   });
      //   this.data.push({
      //       name: 'Squirtle',
      //       src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      //       description: 'Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.'
      //   });
      //   this.data.push({
      //       name: 'Wartortle',
      //       src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
      //       description: 'Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler.'
      //   });
      //   this.data.push({
      //       name: 'Blastoise',
      //       src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
      //       description: 'Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.'
      //   });
      //   this.data.push({
      //       name: 'Caterpie',
      //       src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
      //       description: 'Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.'
      //   });
      //   this.data.push({
      //       name: 'Metapod',
      //       src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
      //       description: 'The shell covering this Pokémon’s body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.'
      //   });
      //   this.data.push({
      //       name: 'Butterfree',
      //       src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
      //       description: 'Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.'
      //   });
      //   this.data.push({
      //       name: 'Weedle',
      //       src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
      //       description: 'Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).'
      //   });
      //   this.data.push({
      //       name: 'Kakuna',
      //       src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
      //       description: 'Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.'
      //   });
      //   this.data.push({
      //       name: 'Beedrill',
      //       src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
      //       description: 'Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.'
      //   });
    }

    listStation() {
      this.stationService.list().pipe(map((response: Station[]) =>  {
        return this.stationList = response;
      }))
      .subscribe((response) => {
        this.stationName = response.map(x => x.name);
      console.log(response);
  },
  error => {
      alert('Cannot get Station List' + error);
      console.log(error);
   });
    }


    listOrder() {
      this.kotService.list().pipe(map((response: KDS[]) =>  {
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
      this.kotService.getOne(id).pipe(map((response: KDS) =>  {
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
