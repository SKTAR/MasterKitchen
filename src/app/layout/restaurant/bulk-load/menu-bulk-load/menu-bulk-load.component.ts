import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-menu-bulk-load',
  templateUrl: './menu-bulk-load.component.html',
  styleUrls: ['./menu-bulk-load.component.scss']
})
export class MenuBulkLoadComponent implements OnInit {

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
        add: {
      addButtonContent: 'Add',
      createButtonContent: 'Create"></i>',
      cancelButtonContent: 'Cancle"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();

  // constructor(private service: SmartTableData) {
  //   const data = this.service.getData();
  //   this.source.load(data);
  // }

   constructor() {

  this.source.load(this.data);

   }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }


  ngOnInit() {
  }

}
