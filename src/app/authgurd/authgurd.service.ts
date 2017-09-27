import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthgurdService implements CanActivate {

  constructor(private router: Router) { }
/*the functioncheck if the user is login  */
/*return true if user login*/
/*direct to lohin page if the authentication is wrong*/
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (localStorage.getItem('currentUser')) {
        return true;
    }

    this.router.navigate(['login']);
    return false;

  }

}
