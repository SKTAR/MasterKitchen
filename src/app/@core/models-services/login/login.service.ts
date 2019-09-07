import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseAPI } from '../_base';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseAPI {
  constructor(
    protected httpClient: HttpClient) {
    super(httpClient);
    this.subURL = '/auth';
  }

  public login(data) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}`, data, this.httpOptions);
  }
}
