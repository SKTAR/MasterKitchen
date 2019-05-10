import { Component, OnInit } from '@angular/core';
import { Station } from '../shared/common-model/station.model';
import { StationService } from '../shared/kitchen-services/station.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {

  station: Station;
  employee = ['Employee1', 'Employee2', 'Employee3', 'Employee4', 'Employee5'];
  employeeList = [];
  staitonList: Station[] = [];
  constructor(private stationService: StationService) {
    this.station = new Station();
    this.station.active = true;
    this.employeeList = [];
    this.listStation();
  }

  ngOnInit() {
  }
  listStation() {
    this.stationService.list().pipe(map((response) =>  {
			return this.staitonList = response;
		}))
		.subscribe((response) => {
		console.log('len' + this.staitonList.length);
},
error => {
		alert('Cannot get Menu Category' + error);
		console.log(error);
 });
  }

  createStation() {
     console.log(this.station);
    //  this.stationService.create(this.station).subscribe(res => console.log(res)
   //  );

  }
  removeStation() {
    console.log(this.station);
    // this.stationService.delete(this.station).subscribe(res => console.log(res)
    //  );
  }
  updateStation() {
  }
  checkValue(args) {
    const switchOn: boolean = args.target.checked;
    this.station.active = switchOn;
     console.log('value: ' + switchOn);
    // console.log('value2'+val2);
  }
  addEmployee(args) {
    const employeeName = args.target.value;
    // alert(employeeName);
    this.employeeList.push(employeeName);
    console.log(this.employeeList);
  }
  removeEmployee(args) {
    const employeeName = args.target.value;
    // alert(employeeName);
    this.employeeList.splice(employeeName);
  }
}
