import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseAPI } from './_base';

import { Observable } from 'rxjs';
import { MenuModel } from '../kitchen-models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends BaseAPI {
  constructor(
    protected httpClient: HttpClient) {
    super(httpClient);
    this.subURL = '/menu';
  }

  public listCategories() {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/getAllCategories`, null);
  }

  public listMenuByCategory(category: string) {
    return this.httpClient.post<MenuModel[]>(`${this.apiURL}${this.subURL}/listByCategory`, {
          category: category
         });
   }
 
  // Main Data
   public list(): Observable<MenuModel[]> {
    return this.httpClient.post<MenuModel[]>(`${this.apiURL}${this.subURL}/list`, null);
  }

  // http://www.yesboxlab.com:3600/menu/getByPartNumber/PROD234789

}
