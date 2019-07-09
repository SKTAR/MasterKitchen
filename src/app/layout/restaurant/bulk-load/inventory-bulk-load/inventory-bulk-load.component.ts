import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-inventory-bulk-load',
  templateUrl: './inventory-bulk-load.component.html',
  styleUrls: ['./inventory-bulk-load.component.scss']
})
export class InventoryBulkLoadComponent implements OnInit {

  data = [
    {
      id:1,
      firstName:'Surasak',
      lastName:'Kaewsiri',
      username:'surasak',
      email:'surasak.kaewsiri@gmail.com',
      age:18,


    },
    {
      id:2,
      firstName:'Mo',
      lastName:'Salah',
      username:'mo',
      email:'mo.salah@gmail.com',
      age:26,
    }
  ];

  settings = {
    // // add: {
    // //   addButtonContent: '<i class="nb-plus"></i>',
    // //   createButtonContent: '<i class="nb-checkmark"></i>',
    // //   cancelButtonContent: '<i class="nb-close"></i>',
    // // },
    // // edit: {
    // //   editButtonContent: '<i class="nb-edit"></i>',
    // //   saveButtonContent: '<i class="nb-checkmark"></i>',
    // //   cancelButtonContent: '<i class="nb-close"></i>',
    // // },
    // // delete: {
    // //   deleteButtonContent: '<i class="nb-trash"></i>',
    // //   confirmDelete: true,
    // // },
  
    columns: {
      id: {
        title: 'No',
        type: 'number',
      },
      firstName: {
        title: 'Family',
        type: 'string',
      },
      class: {
        title: 'Class',
        type: 'string',
      },
      subClass: {
        title: 'Sub Class',
        type: 'string',
      },
      brand: {
        title: 'Brand',
        type: 'string',
      },
      cost: {
        title: 'Cost',
        type: 'number',
      },
      qty: {
        title: 'Quantity',
        type: 'number',
      },
      packageUnit: {
        title: 'Package Unit',
        type: 'string',
      },
      netWeight: {
        title: 'Net Weight',
        type: 'number',
      },
      yield: {
        title: 'Yield',
        type: 'number',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();


  constructor() { }

  ngOnInit() {
  } 

  onDeleteConfirm(args) {
  }
}
