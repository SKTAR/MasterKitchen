import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthGuard } from '../shared/guard';
import { User } from '../shared/services/login-service/model/user.model';
import { LoginService } from '../shared/services/login-service/login.service';
import { RoutingHelperService } from '../shared/router-helper/routing-helper.service';
import { RadSideDrawerService } from '../shared/ui-services/radside-drawer-service/radsidedrawer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    appName = 'Restaurant Intelligence';
    isLoggingIn = true;
    user: User;
    @ViewChild('password') password: ElementRef;
    @ViewChild('confirmPassword') confirmPassword: ElementRef;

  constructor(public router: RoutingHelperService,
              private auth: AuthGuard,
              private loginService: LoginService,
              private   drawerService: RadSideDrawerService
              ) {
    this.user = new User();
  }

  ngOnInit() {}

  onLoggedin() {
       this.loginService.logIn();
  }

  onLoggedinMobile(navItemRout: string) {
    this.loginService.logIn();
   
     this.router.goToPage('/dashboard',null);
    
  }


}
