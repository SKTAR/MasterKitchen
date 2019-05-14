import { Component, OnInit, Input } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
export interface IAlert {
  id: number;
  type: string;
  message: string;
}
@Component({
  selector: 'app-alert-global',
  templateUrl: './alert-global.component.html',
  styleUrls: ['./alert-global.component.scss']
})
export class AlertGlobalComponent implements OnInit {
  @Input()
  public alerts: Array<IAlert> = [];

  private backup: Array<IAlert>;
  
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  constructor() {
    this.alerts.push({
      id: 1,
      type: 'success',
      message: 'This is an success alert',
    });
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
  }
  

  ngOnInit(): void {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  public changeSuccessMessage() {
    this._success.next(`${new Date()} - Message successfully changed.`);
  }
}
