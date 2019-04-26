import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseAPI } from './_base';
import { Menu } from '../kitchen-models/menu';

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
    //return this.httpClient.post(`${this.apiURL}/menu/getAllCategories`, null); 
    this.subURL =  '/menu/getAllCategories';
    return this.post(null);
  }
  public listMenuByCategory(category: string) {
     this.subURL =  '/menu/listByCategory';
    // return this.httpClient.post<Menu[]>(`${this.apiURL}/listByCategory/${category}`, null);
    return this.httpClient.post<Menu[]>(`${this.apiURL}${this.subURL}`, {
          category: category
         });
  }

}
