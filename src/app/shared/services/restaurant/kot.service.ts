import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { MenuModel } from '../../models/menu.model';
import { BaseAPI } from '../_base';

@Injectable({
  providedIn: 'root'
})
export class KOTService extends BaseAPI {
  constructor(
    protected httpClient: HttpClient) {
    super(httpClient);
    this.subURL = '/order';
  }


  public cancel(uid) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/cancel/${uid}`, { }, this.httpOptions);

  }

  public reOpen(uid) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/reOpen/${uid}`, { }, this.httpOptions);
  }

/** 
   * http://www.yesboxlab.com:3600/order/listAssignedTo" \
   *  data "{
      \"uid\": \"5d008a2d32b20707a1b436bc\",
      \"items\": {\"name\" : \"ไก่ทอด\"}
  }"
   */
  public listAssignedTo(data) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/listAssignedTo`, data, this.httpOptions);

  }

  /** 
   * http://www.yesboxlab.com:3600/order/takeAssignedTo" \
   *  data "{
      \"uid\": \"5d008a2d32b20707a1b436bc\",
      \"items\": {\"name\" : \"ไก่ทอด\"}
  }"
  */
  public takeAssignedTo(data) {
    return this.httpClient.post(`${this.apiURL}${this.subURL}/takeAssignedTo`, data, this.httpOptions);

  }


 /**
   * http://www.yesboxlab.com:3600/order/doneAssignedTo \
      * data "{
      \"uid\": \"5d008a2d32b20707a1b436bc\",
      \"items\": {\"name\" : \"ไก่ทอด\"}
      }"
  */
 public doneAssignedTo(data) {
  return this.httpClient.post(`${this.apiURL}${this.subURL}/takeAssignedTo`, data, this.httpOptions);

}

 /**
   * http://www.yesboxlab.com:3600/order/deliveredAssignedTo \
      * data "{
      \"uid\": \"5d008a2d32b20707a1b436bc\",
      \"items\": {\"name\" : \"ไก่ทอด\"}
      }"
  */

 public deliveredAssignedTo(data) {
  return this.httpClient.post(`${this.apiURL}${this.subURL}/deliveredAssignedTo`, data, this.httpOptions);

}

 /**
   * http://www.yesboxlab.com:3600/order/cancelAssignedTo \
      --data "{
      \"uid\": \"5d008a2d32b20707a1b436bc\",
      \"items\": {\"name\" : \"ไก่ทอด\"}
    }""
  */

 public cancelAssignedTo(data) {
  return this.httpClient.post(`${this.apiURL}${this.subURL}/cancelAssignedTo`, data, this.httpOptions);

}



  public getOrderTypeList() {
   return  ['Dine In' , 'Take Away' , 'Delivery', 'Others'];
  }

  public getViewKotTabList() {
    return  ['Show All' ,'Dine In' , 'Take Away' , 'Delivery', 'Others'];
   }
}
