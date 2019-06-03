import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
@Injectable({
    providedIn: 'root'
})
export class BaseAPI {
  apiURL = 'http://www.yesboxlab.com:3600';
  subURL = '';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // tslint:disable-next-line:max-line-length
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1Y2YxODU4MmMxOWNkMzFiYTQ2YjZmZWQiLCJlbWFpbCI6InN1cmFzYWsua2Fld3NpcmlAZ21haWwuY29tIiwicGVybWlzc2lvbkxldmVsIjoxLCJwcm92aWRlciI6ImVtYWlsIiwibmFtZSI6IlN1cmFzYWsgS2Fld3NpcmkiLCJvcmdhbml6YXRpb24iOiJfX01hc3RlcktpdGNoZW4iLCJyZWZyZXNoS2V5IjoiT0tTRlpxOEpNSDc4akdKYVhqRDlYdz09IiwiaWF0IjoxNTU5NDU5NjYyfQ.vxrLxO__-dJHldAtDREIvAl6TxH42MSOJ90F4tiOGbc'
    })
  };

  
  constructor(
    protected httpClient: HttpClient,
    ) {
  }

  // Basic Abstract Method
  public create(data) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/create`, data, this.httpOptions);
  }
  public list() {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/list`, null, this.httpOptions);
  }

  public getByUid(uid) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/get/${uid}`, null, this.httpOptions);
  }

  public getByKey(keyName: string) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/getByKey`, { 'name' : keyName }, this.httpOptions);
  }

  public update(uid, data) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/update/${uid}`, data, this.httpOptions);
  }
 
  public delete(uid) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/delete/${uid}`,{}, this.httpOptions);
  }
 }
