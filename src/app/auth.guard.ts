import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "src/app/auth.service";
import { Router } from  '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router: Router) { }  
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {  
        if (localStorage.getItem('currentUser')) {  
            return true;  
        }  
        this._router.navigate(['']);  
        return false;  
    }  
  
}
