import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { RoutingHelperService } from '../router-helper/routing-helper.service.tns';
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
   
}
