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

  // Basic Abstract Method
  public get() {
    return this.httpClient.get(`${this.apiURL}${this.subURL}`);
  }
  public getOne(uid) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/get/${uid}`, null);
  }
  public update(uid, data) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/update/${uid}`, data);
  }
  public create(data) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/create`, data);
  }
  public delete(uid) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/delete/${uid}`, {});
  }
 }
