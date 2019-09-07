import { IngredientModel } from './menu.model';

export class RtuModel {
    uid: string;     // m 
    productCode: string; // m
   // category: string;   // m
    quantity: number;   // m
    quantityUnit: string; // m
    lifetime: number; // m
    lifetimeUnit: string; // m
    price: number;  //  0  
    items: IngredientModel[];


}