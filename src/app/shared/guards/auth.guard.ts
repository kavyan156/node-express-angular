import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Auth from '@aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private router: Router ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('auth', Auth.currentAuthenticatedUser());
      return Auth.currentAuthenticatedUser().then(() => {
        return true ; })
      .catch(() => {
        console.log('auth', Auth.currentAuthenticatedUser());
        this.router.navigate(['']);
        return false;
      });
  }

}
