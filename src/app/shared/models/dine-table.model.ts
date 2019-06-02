export class TableObj {
    NumberOfCustomer: number;
    TableID: string;
    PositionX: number;
    PositionY: number;
    constructor(tableID: string,
                positionX: number,
                positionY: number) {
                this.NumberOfCustomer = 1;
                this.TableID = tableID;
                this.PositionX = positionX;
                this.PositionY = positionY;
    }
  }