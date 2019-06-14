import { Component, OnInit } from '@angular/core';
import { StationModel } from '../../../shared/models/station.model';
import { StationService } from '../../../shared/services/restaurant/station.service';
import { MenuService } from '../../../shared/services/restaurant/menu.service';
import { map } from 'rxjs/operators';
import { Observable as RxObservable } from 'rxjs';
@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {

  menuCategoryList: any = [];
  station: StationModel;
  employee = ['Employee1', 'Employee2', 'Employee3', 'Employee4', 'Employee5'];
  // stationpicker = ['Station1', 'Station2', 'Station3', 'Station4', 'Station5'];
  employeeList = [];
  stationList: StationModel[] = [];
  stationListPicker = [];
  // public myItems: RxObservable<Array<DataItem>>;
  constructor(private stationService: StationService,
              private menuService: MenuService) {
    this.station = new StationModel();
    this.station.active = true;
    this.employeeList = [];
    // this.listStation();
    this.listAllCategory();
    //#region Mobile
    //this.creatStationListMobile();
   
    //#endregion
  }

  ngOnInit() {
    
    this.stationService.refreshNeeded$.subscribe(() => {
        this.listStation();
    });

    this.listStation();
   
  }

  public listAllCategory() {
		this.menuService.listCategories().pipe(map((response) =>  {
			return this.menuCategoryList = response;
		}))
		.subscribe((response) => {
		console.log(response);
},
error => {
		alert('Cannot get Menu Category' + error);
		console.log(error);
 });
}

  listStation() {
    this.stationService.list().pipe(map((response: StationModel[]) =>  {
			return this.stationList = response;
		}))
		.subscribe((response) => {
      this.stationListPicker = response.map(x => x.name);
		console.log(response);
},
error => {
		alert('Cannot get Station List' + error);
		console.log(error);
 });
  }

  createStation() {
     console.log(this.station);
      this.stationService.createStation(this.station).subscribe(
        res => console.log(res)
     );

  }
  removeStation() {
    if (this.station.uid == null) {
        const selectedStation =  this.stationList.find(x => x.name === this.station.name);
        this.stationService.deleteStation(selectedStation.uid).subscribe(res => console.log(res));
    }
    else {
      this.stationService.deleteStation(this.station.uid).subscribe(res => console.log(res));
    }
    
  }
  updateStation() {
    this.stationService.update(this.station.uid, this.station)
    .subscribe(res => console.log(res));
  }

  loadStation(uid: string) {
   console.log(uid);
   // const station =  this.staitonList.find(x => x.uid === uid);
   this.stationService.getByUid(uid).pipe(map((response: StationModel) =>  {
    return this.station = response;
      }))
      .subscribe((response) => {
      console.log(response);
    },
    error => {
      alert('Cannot get Menu Category' + error);
      console.log(error);
    });

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

//#region Mobile


    // creatStationListMobile() {
    //     let items = [];
    //     for (let i = 0; i < 3; i++) {
    //         items.push(new DataItem(i, 'data item ' + i));
    //     }

    //     let subscr;
    //     this.myItems = RxObservable.create(subscriber => {
    //         subscr = subscriber;
    //         subscriber.next(items);
    //         return function () {
    //             console.log('Unsubscribe called!');
    //         };
    //     });

    //     let counter = 2;
    //     let intervalId = setInterval(() => {
    //         counter++;
    //         items.push(new DataItem(counter + 1, 'data item ' + (counter + 1)));
    //         subscr.next(items);
    //     }, 1000);

    //     setTimeout(() => {
    //         clearInterval(intervalId);
    //     }, 15000);
    // }
//#endregion


}
