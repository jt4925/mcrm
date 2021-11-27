import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {
      console.log('inside canactivate');

      const token = this.authService.getToken();
      console.log('token is: ', token);

      let tokenExpired = this.authService.tokenExpired(token);

      console.log('tokenExpired: ', tokenExpired);

      if(tokenExpired){
        this.router.navigate(['/loggedout']);
        return false;
      }

      return true;
      //
      // const isAuth = this.authService.isAuthenticated();
      // if (!isAuth) {
      //   this.router.navigate(['/loggedout']);
      // }
      // return isAuth;
  }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot):
  //   boolean | Observable<boolean> | Promise<boolean> {
  //     //console.log('inside canactivate');
  //     const isAuth = this.authService.getIsAuth();
  //     if (!isAuth) {
  //       this.router.navigate(['/loggedout']);
  //     }
  //     return isAuth;
  // }
}
