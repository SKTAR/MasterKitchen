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

  // Additional Methods for Menu Service
  public listCategories() {
    // return this.httpClient.post(`${this.apiURL}/menu/getAllCategories`,null); // Cuz we extend Base API
    this.subURL =  '/menu/getAllCategories';
    return this.post(null);
  }
  public listMenuByCategory(category) {
    return this.httpClient.post(`${this.apiURL}/listByCategory/${category}`, null);
  }

}
