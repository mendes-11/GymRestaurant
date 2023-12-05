import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class UserGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        const jwtToken = sessionStorage.getItem('jwt');
        console.log('UserGuard: canActivate called, JWT token:', jwtToken);

        if (!jwtToken) {
            console.log('UserGuard: No JWT token, redirecting to login');
            return this.router.parseUrl('/');
        } else {
            console.log('UserGuard: JWT token found, access granted');
            return true;
        }
    }
}