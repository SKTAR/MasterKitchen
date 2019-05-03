
export class Menu {
    partNumber: string;
    name: string;
    type: string;
    category: string;
    station: string;
    sku: string;
    price: number;
    priceUnit: string;
    salable: boolean;
    createdDate: string;
    updatedDate: string;

    items: MenuItems[];

    constructor(partNumber: string, name: string, price: number) {
        this.partNumber = partNumber;
        this.name = name;
        this.price = price;
      }
}

export class Category {
    categoryName: string;
    constructor(categoryName: string)
    {
      this.categoryName = categoryName;
    }
  }
class MenuItems {
    'partNumber': string;
    'name': string;
    'type': string;
    'category': string;
    'sku': string;
    'quantity': number;
    'quantityUnit': string;
}
