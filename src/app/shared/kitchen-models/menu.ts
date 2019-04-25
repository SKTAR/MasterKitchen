

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
