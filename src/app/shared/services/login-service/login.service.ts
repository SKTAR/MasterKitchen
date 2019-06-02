import { Injectable,  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService  {
    constructor() {
  }

  logIn() {
      localStorage.setItem('isLoggedin', 'true');
  }
}
