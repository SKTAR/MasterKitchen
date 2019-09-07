export class DineTableModel {
    public NumberOfCustomer: number;
    public TableID: string;
    public PositionX: number;
    public PositionY: number;
    constructor(tableID: string,
                positionX: number,
                positionY: number) {
                this.NumberOfCustomer = 1;
                this.TableID = tableID;
                this.PositionX = positionX;
                this.PositionY = positionY;
    }
  }