import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseAPI } from './_base';

import { Observable, Subject } from 'rxjs';
import { MenuModel } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends BaseAPI {
  private _refreshNeeded$ = new Subject<void>();

  constructor(
    protected httpClient: HttpClient) {
    super(httpClient);
    this.subURL = '/menu';
  }

  public listCategories() {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/getAllCategories`, null, this.httpOptions);
  }

  public listMenuByCategory(category: string) {
    return this.httpClient.post<MenuModel[]>(`${this.apiURL}${this.subURL}/listByCategory`, {
          category: category
         }, this.httpOptions);
   }
 
  // Main Data
   public list(): Observable<MenuModel[]> {
    return this.httpClient.post<MenuModel[]>(`${this.apiURL}${this.subURL}/list`, null, this.httpOptions);
  }

  // http://www.yesboxlab.com:3600/menu/getByPartNumber/PROD234789

}
