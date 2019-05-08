import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
@Injectable({
    providedIn: 'root'
})
export class BaseAPI {
  apiURL = 'http://www.yesboxlab.com:3600';
  subURL = '';
  constructor(
    protected httpClient: HttpClient,
    ) {
  }

  // // Basic Abstract Method
  // public get(){
  //   return this.httpClient.get(`${this.apiURL}${this.subURL}`);
  // }
  // public getOne(id) {
  //   return this.httpClient.get(`${this.apiURL}${this.subURL}/get/${id}`);
  // }
  // public update(id, data) {
  //   return this.httpClient.post(`${this.apiURL}${this.subURL}/update/${id}`, data);
  // }
  // public create(data) {
  //   return this.httpClient.post(`${this.apiURL}${this.subURL}/create`, data);
  // }
  // public delete(id) {
  //   return this.httpClient.post(`${this.apiURL}${this.subURL}/delete/${id}`, {});
  // }
}
