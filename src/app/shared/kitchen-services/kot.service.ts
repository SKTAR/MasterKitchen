import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseAPI } from './_base';

import { Observable } from 'rxjs';
import { MenuModel } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class KOTService extends BaseAPI {
  constructor(
    protected httpClient: HttpClient) {
    super(httpClient);
    this.subURL = '/ordering';
  }

  public list() {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/list`, null, this.httpOptions);
 }

 

}
