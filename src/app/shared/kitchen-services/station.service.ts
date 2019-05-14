import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseAPI } from './_base';

import { Observable } from 'rxjs';
import { MenuModel } from '../kitchen-models/menu.model';
import { Station } from '../common-model/station.model';

@Injectable({
  providedIn: 'root'
})
export class StationService extends BaseAPI {
  constructor(
    protected httpClient: HttpClient) {
    super(httpClient);
    this.subURL = '/station';

  }
// http://www.yesboxlab.com:3600/station/get/{UID}
// http://www.yesboxlab.com:3600/station/list
// http://www.yesboxlab.com:3600/station/delete/{UID}
 
  // Main Data
  public list() {
    // return this.httpClient.get<Station[]>(`${this.apiURL}${this.subURL}`);
    return this.httpClient.post(`${this.apiURL}${this.subURL}/list`, null);
  }
  // public getStation(uid) {
  //   return this.getOne(uid);
  // }

}
