import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Auth from '@aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class UnAuthGuard implements CanActivate {
  constructor( private router: Router ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('un-auth', Auth.currentAuthenticatedUser());
      return Auth.currentAuthenticatedUser()
      .then(() => {
        this.router.navigate(['home']);
        return false;
      })
      .catch(() => {
        console.log('un-auth', Auth.currentAuthenticatedUser());
        return true;
      });
  }

}
