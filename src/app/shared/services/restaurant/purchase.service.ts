import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { MenuModel } from '../../models/menu.model';
import { BaseAPI } from '../_base';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends BaseAPI {
  constructor(
    protected httpClient: HttpClient) {
    super(httpClient);
    this.subURL = '/purchase';
  }

  public cancel(uid) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/cancel/${uid}`, { }, this.httpOptions);

  }

  public reOpen(uid) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/reOpen/${uid}`, { }, this.httpOptions);
  }
}
