
export class Menu {
    private _partNumber: string;
  public get partNumber(): string {
    return this._partNumber;
  }
  public set partNumber(value: string) {
    this._partNumber = value;
  }
    private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
    private _type: string;
  public get type(): string {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }
    private _category: string;
  public get category(): string {
    return this._category;
  }
  public set category(value: string) {
    this._category = value;
  }
    private _station: string;
  public get station(): string {
    return this._station;
  }
  public set station(value: string) {
    this._station = value;
  }
    private _sku: string;
  public get sku(): string {
    return this._sku;
  }
  public set sku(value: string) {
    this._sku = value;
  }
    private _price: number;
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
    private _priceUnit: string;
  public get priceUnit(): string {
    return this._priceUnit;
  }
  public set priceUnit(value: string) {
    this._priceUnit = value;
  }
    private _salable: boolean;
  public get salable(): boolean {
    return this._salable;
  }
  public set salable(value: boolean) {
    this._salable = value;
  }
    private _createdDate: string;
  public get createdDate(): string {
    return this._createdDate;
  }
  public set createdDate(value: string) {
    this._createdDate = value;
  }
    private _updatedDate: string;
  public get updatedDate(): string {
    return this._updatedDate;
  }
  public set updatedDate(value: string) {
    this._updatedDate = value;
  }

    private _items: MenuItems[];
  public get items(): MenuItems[] {
    return this._items;
  }
  public set items(value: MenuItems[]) {
    this._items = value;
  }

    constructor() {
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
