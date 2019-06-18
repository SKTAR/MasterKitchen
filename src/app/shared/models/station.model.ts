 export class StationModel
{
  name: string; // 'station1',
  description: string; // '',
  department: string; // '',
  employees: [];
  active: boolean; // true
  uid:    string;
}

export class CookingStationModel
{
  name: string; // 'station1',
  products : StationProduct[];
  
  uid:    string;
}

export class StationProduct {
  
    name: string;
    productCode: string;
  
}