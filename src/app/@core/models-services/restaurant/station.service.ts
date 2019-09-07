import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

import { tap } from 'rxjs/operators';
import { BaseAPI } from '../_base';

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
