export class MenuItem {
    id: string;
    name:     string;
    category: string;
    price: number;
    cookingTime: any;
    descripton: string;
    // recipe: Recipe[];
         //  ];

}


export interface Recipe {
    material_name: string;
    material_qty: number;
    material_unit: string;
    material_price: number;
    ingredient_qty: number;
    ingredient_unit: string;
}




/*
interface Item {
    id: number;
    size: number;
}
interface Example {
    name: string;
    items: {
        [key: string]: Item
    };
}

var obj: Example = {
    name: "test",
    items: {
        "a": {
            id: 1,
            size: 10
        },
        "b": {
            id: 2,
            size: 34
        }
    }
}
*/
