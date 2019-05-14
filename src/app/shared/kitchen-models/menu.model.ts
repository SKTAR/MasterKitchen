
export class MenuModel {
  uid: string;
  partNumber: number;
  name: string;
  category: string;
  station: string;
  sku: string; // large
  price: number;
  items: Array<Ingredients>;
  createdDate: Date;
  updatedDate: Date;
  v: number;

    constructor() {
      }
}

export class Ingredients {
    'partNumber': string;
    'name': string;
    'category': string;
    'sku': string;
    'quantity': number;
    'quantityUnit': string;
}

// BY MIG
// export class MenuModel{
//   partNumber: string;
//   name: string;
//   category: string;
//   station: string;
//   sku: string;
//   price: number;
//   items: MenuItems[];
//   createdDate: string;
//   updatedDate: string;
// }
// class MenuItems {
// "name": string;
// "category": string;
// "sku": string;
// "quantity": number;
// "quantityUnit": string;
// }

