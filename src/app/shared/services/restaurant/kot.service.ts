import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { MenuModel } from '../../models/menu.model';
import { BaseAPI } from '../_base';

@Injectable({
  providedIn: 'root'
})
export class KOTService extends BaseAPI {
  constructor(
    protected httpClient: HttpClient) {
    super(httpClient);
    this.subURL = '/order';
  }


  public cancel(uid) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/cancel/${uid}`, { }, this.httpOptions);

  }

  public reOpen(uid) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/reOpen/${uid}`, { }, this.httpOptions);
  }

  public getOrderTypeList() {
   return  ['Dine In' , 'Take Away' , 'Delivery', 'Others'];
  }

  public getViewKotTabList() {
    return  ['Show All' ,'Dine In' , 'Take Away' , 'Delivery', 'Others'];
   }
}
