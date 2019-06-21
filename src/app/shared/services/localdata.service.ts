
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class LocalDataService {

    
    images = [
        '~/assets/images/food/burger/burger1.jpg',
        '~/assets/images/food/burger/burger2.jpg',
        '~/assets/images/food/burger/burger3.jpg',
        '~/assets/images/food/burger/burger4.jpg',
        '~/assets/images/food/burger/burger5.jpg',
        '~/assets/images/food/burger/burger6.jpg',
        '~/assets/images/food/burger/burger1.jpg',
        '~/assets/images/food/cake/cake1.jpg',
        '~/assets/images/food/cake/cake2.jpg',
        '~/assets/images/food/cake/cake3.jpg',
        '~/assets/images/food/cake/cake4.jpg',
        '~/assets/images/food/burger/burger6.jpg'
        ];
    public getImageStringArray() {
            return this.images;
    }

}