import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseAPI } from './_base';

import { Observable, Subject } from 'rxjs';
import { MenuModel } from '../models/menu.model';
import { StationModel } from '../models/station.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StationService extends BaseAPI {
  
  private _refreshNeeded$ = new Subject<void>();

 
  constructor(
    protected httpClient: HttpClient) {
    super(httpClient);
    this.subURL = '/station';

  }
  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  public list() {
     return this.httpClient.post(`${this.apiURL}${this.subURL}/list`, null, this.httpOptions);
  }
  public createStation(data: any) {
    return this.create(data).pipe(
      tap(() =>  {
        this._refreshNeeded$.next();
      }));
  }
  public deleteStation(id: any) {
    alert(id);
    return this.delete(id).pipe(
      tap(() =>  {
        this._refreshNeeded$.next();
      }));
  }
}
