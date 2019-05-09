
export class MenuModel{
        partNumber: string;
        name: string;
        category: string;
        station: string;
        sku: string;
        price: number;
        items: MenuItems[];
        createdDate: string;
        updatedDate: string; 
}
class MenuItems {
    "name": string;
    "category": string;
    "sku": string;
    "quantity": number;
    "quantityUnit": string;
}


