import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import * as localStorage from 'nativescript-localstorage';
import { RouterExtensions } from 'nativescript-angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: RouterExtensions) {}

    canActivate() {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
         
    }
    onLoggedIn(token: string) {
        //localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem("accessToken", token);
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigateByUrl('/dashboard');
        }
    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
   
}
