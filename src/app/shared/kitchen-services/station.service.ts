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
  
 
  // Main Data
  public list() {
    return this.httpClient.get<Station[]>(`${this.apiURL}${this.subURL}`);
    // return this.httpClient.post(`${this.apiURL}/station/getAllStation`, null);
  }

  // public create(data: Station) {
  //   return this.httpClient.post(`${this.apiURL}${this.subURL}/create`, data);
  // }



}
