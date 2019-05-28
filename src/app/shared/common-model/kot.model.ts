import { MenuModel } from '../kitchen-models/menu.model';

export enum OrderType {
  DineIn = 1,
  TakeAway = 2,
  Delivery= 3,
  Other = 4
}

export class KOT  { //Kitchen Order Token {
      uid;
      customerName: string;
      customerNumber: number;
      shipTo: string; // table3
      contactName: string; 
      saleName: string;
      status: string; // 'OPEN'
      type: string;  // Dine In
      orderNumber: string;//'Order0001',
      paymentTerm: string;// 'CASH',
      deliveryTime: number; //30,
      deliveryUnit: string;//'Minute',
      validDate: Date; //'2019-03-19T13:43:21.270Z',
      items: MenuModel[];;
}

export class KDS  {

  'id': string;
   'customerName': string;
   'taxId': string;
   'status': string;
   'orderNumber': string;
   'deliveryTime': number;
   'deliveryUnit': string;
   'remark': string;
   'items': IKDS[];
   'subTotal': number; // 185,
   'percentTaxRate': number; //10,
   'total': number; // 203.50000000000003,
   'createdDate': Date; //'2019-05-14T08:31:12.119Z',
   'updatedDate': Date; //'2019-05-14T08:31:12.119Z',
   'validDate': Date; //'2019-05-14T08:31:12.119Z'
   'type' :string;
 }

 export interface IKDS {

  'id': string; // '5cda7cd0730b464413a90545',
  'unitPrice': number; // 75,
  'quantity': number; // 1,
  'total': number; // 75

}
