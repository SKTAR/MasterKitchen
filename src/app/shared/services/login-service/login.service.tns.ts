import { Injectable,  } from '@angular/core';
import * as localStorage from 'nativescript-localstorage';
import { RoutingHelperService } from '../../router-helper/routing-helper.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private routerHelper: RoutingHelperService) {
  }
  logIn() {
    localStorage.setItem('isLoggedin', 'true');
}
}
