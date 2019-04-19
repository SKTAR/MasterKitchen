import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class BaseAPI{ 
  apiURL: string = 'http://www.yesboxlab.com:3600';
  subURL: string = '';
  constructor(
    protected httpClient: HttpClient) {
  }

  // Basic Abstract Method
  public get() {
    return this.httpClient.get(`${this.apiURL}${this.subURL}`);
  }
  public getOne(id) {
    return this.httpClient.get(`${this.apiURL}${this.subURL}/get/${id}`);
  }
  public update(id, data) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/update/${id}`, data);
  }
  public create(data) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/create`, data);
  }
  public delete(id) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/delete/${id}`, {});
  }
}
