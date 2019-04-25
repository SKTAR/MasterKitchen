import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPI } from './_base';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends BaseAPI {
  constructor(
    protected httpClient: HttpClient) {
    super(httpClient);
    this.subURL = '/menu';
  }
}
