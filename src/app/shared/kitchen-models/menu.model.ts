
export class Menu {
  partNumber: number;
  name: string;
  category: string;
  station : string;
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
    //'partNumber': string;
    'name': string;
    //'type': string;
    'category': string;
    'sku': string;
    'quantity': number;
    'quantityUnit': string;
}
