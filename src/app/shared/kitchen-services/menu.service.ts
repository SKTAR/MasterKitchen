import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseAPI } from './_base';
import { Menu, Category } from '../kitchen-models/menu.model';

import { Observable } from 'rxjs';
import { MenuModel } from '../kitchen-models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends BaseAPI {
  
  constructor(
    protected httpClient: HttpClient) {
    super(httpClient);
    this.subURL = '/menu';

  }
  //           // Additional Methods for Menu Service
  // public listCategories() {
  //   // return this.httpClient.post(`${this.apiURL}/menu/getAllCategories`, null); 
  //   this.subURL =  '/menu/getAllCategories';
  //   return this.post(null);
  // }
  // Main Data
  public list(): Observable<MenuModel[]> {
    return this.httpClient.get<MenuModel[]>(`${this.apiURL}${this.subURL}`)
  }
  public get(): Observable<MenuModel[]> {
    return this.httpClient.get<MenuModel[]>(`${this.apiURL}${this.subURL}`);
  }
  public getOne(id): Observable<MenuModel> {
    return this.httpClient.get<MenuModel>(`${this.apiURL}${this.subURL}/get/${id}`);
  }
  public update(id, data: MenuModel) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/update/${id}`, data);
  }
  public create(data: MenuModel) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/create`, data);
  }
  public delete(id) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/delete/${id}`, {});
  }

  // public listCategories2() {
  //   // return this.httpClient.post(`${this.apiURL}/menu/getAllCategories`, null); 
  //   this.subURL =  '/menu/getAllCategories';
  //   return this.httpClient.post<Category[]>(`${this.apiURL}${this.subURL}`, null);
  // }

  // public listMenuByCategory(category: string) {
  //    this.subURL =  '/menu/listByCategory';
  //   // return this.httpClient.post<Menu[]>(`${this.apiURL}/listByCategory/${category}`, null);
  //   return this.httpClient.post<Menu[]>(`${this.apiURL}${this.subURL}`, {
  //         category: category
  //        });
  // }

}
