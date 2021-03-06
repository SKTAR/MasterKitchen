import { MenuModel } from './menu.model';

export enum OrderType {
  DineIn = 1,
  TakeAway = 2,
  Delivery= 3,
  Other = 4
}
// uid: string;
// name: string;
// productCode: number;
// category: string;
// quantity: string;
// quantityUnit: string;
// lifetime: string; // large
// lifetimeUnit: number;
// items: Array<IngredientModel>;
// price: Date;
export class KotModel  { //Kitchen Order Token {
    customers: CustomerModel[];
    type: string;
    billTo: {'name': string;}
    shipBy: {'operation': string;}
    shipTo: {'name': string;}
    items: MenuModel[];  //  name , quantity , price

    //#region List
    status: string;
    createdDate: Date;
    updatedDate: Date;
    uid: string;
    //#endregion
    }

    export class CustomerModel {
      name: string;
      age: string;
      gender: string;

    }


    export class KotPassData { // Send Data from Kot Component to Select Menu Component
      orderType: string;
      tableID: string;
      numCust: number;
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
