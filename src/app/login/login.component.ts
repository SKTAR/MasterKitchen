import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthGuard } from '../shared/guard';
import { UserModel } from '../shared/models/user.model';
import { RouterHelperService } from '../shared/services/router-helper/router-helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    appName = 'Restaurant Intelligence';
    isLoggingIn = true;
    user: UserModel;
    @ViewChild('password') password: ElementRef;
    @ViewChild('confirmPassword') confirmPassword: ElementRef;

  constructor(public router: RouterHelperService,
              private auth: AuthGuard,
              ) {
    this.user = new UserModel();
  }

  ngOnInit() {}

  
  onLoggedin() {
   this.auth.onLoggedIn();
}
  // onLoggedinMobile(navItemRout: string) {
  //   this.loginService.logIn();
  //   // this.router.goToPage('/dashboard',null);
    
  // }


}
