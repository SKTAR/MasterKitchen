export enum OrderType {
  DineIn = 1,
  TakeAway = 2,
  Delivery= 3,
  Other = 4
}
export class KOT {
    orderId: string;
    orderType: number;
    staffID: string;
    tableID: string;
    orderItems: OrderMenuItems[];

    constructor(orderId: string,
                orderType: OrderType,
                staffID: string,
                tableID: string,
                orderItems: OrderMenuItems[]) {
                  this.orderId = orderId;
                  this.orderType = orderType;
                  this.staffID = staffID;
                  this.tableID = tableID;
                  this.orderItems = orderItems;
      }
    }



class OrderMenuItems {
    'menuID': string;
    'qty': number;
    'addditonal': [];
    'removed': [];
}
