import { MenuModel } from '../kitchen-models/menu.model';

export enum OrderType {
  DineIn = 1,
  TakeAway = 2,
  Delivery= 3,
  Other = 4
}

export class KOT  { //Kitchen Order Token {
      customerName: string;
      customerNumber: number;
      shipTo: string; // table3
      contactName: string; 
      saleName: string;
      status: string; // 'OPEN'
      type: string;  // Dine In
      orderNumber: string;//'Order0001',
      paymentTerm: string;// "CASH",
      deliveryTime: number; //30,
      deliveryUnit: string;//"Minute",
      validDate: Date //"2019-03-19T13:43:21.270Z",
      items: MenuModel[];
}



