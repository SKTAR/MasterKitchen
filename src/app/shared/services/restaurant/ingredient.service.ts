import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseAPI } from '../_base';

@Injectable({
  providedIn: 'root'
})
export class IngredientService extends BaseAPI {
  constructor(
    protected httpClient: HttpClient) {
    super(httpClient);
    this.subURL = '/ingredient';
  }


  listUnits() {

    return ['G','KG','ML','L']
  }

}
