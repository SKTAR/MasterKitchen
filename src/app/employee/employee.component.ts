import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  @Input() employeeList;
  constructor() { }

  ngOnInit() {
  }
  removeEmployee(args) {
    const employee = args.target.value;
    const removeIndex = this.employeeList.findIndex(item => item === employee);
    // alert('index to be removed' + removeIndex);
    this.employeeList.splice(removeIndex, 1);
    console.log(this.employeeList);
  }
}
