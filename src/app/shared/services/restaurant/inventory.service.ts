import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { MenuModel } from '../../models/menu.model';
import { BaseAPI } from '../_base';

@Injectable({
  providedIn: 'root'
})
export class InventoryService extends BaseAPI {
  constructor(
    protected httpClient: HttpClient) {
    super(httpClient);
    this.subURL = '/inventory';
  }

  public load(data) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/load`, data, this.httpOptions);

  }

}
