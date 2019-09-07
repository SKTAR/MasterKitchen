import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseAPI } from '../_base';

@Injectable({
  providedIn: 'root'
})
export class PoService extends BaseAPI {
  constructor(
    protected httpClient: HttpClient) {
    super(httpClient);
    this.subURL = '/po';
  }
 
  public cancel(uid) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/cancel/${uid}`, { }, this.httpOptions);

  }

  public reOpen(uid) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/reOpen/${uid}`, { }, this.httpOptions);
  }
}
