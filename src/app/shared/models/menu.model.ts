
export class MenuModel {
  uid: string;
  name: string;
  productCode: number;
  category: string;
  quantity: string;
  quantityUnit: string;
  lifetime: string; // large
  lifetimeUnit: number;
  items: Array<IngredientModel>;
  price: number;
  currency: string; //

    constructor() {
      }
}




export class IngredientModel {
    'uid': string;
    'name': string;
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
// 'name': string;
// 'category': string;
// 'sku': string;
// 'quantity': number;
// 'quantityUnit': string;
// }

