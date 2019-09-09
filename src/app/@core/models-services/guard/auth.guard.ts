import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
    onLoggedIn(token: string) {
    // localStorage.setItem('isLoggedin', 'true');
     localStorage.setItem("accessToken", token);
     localStorage.setItem('isLoggedin', 'true');
     this.router.navigateByUrl('/dashboard');
}
    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
