import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { IProduct } from "src/app/products/product";
import { AuthService } from "src/app/auth.service";
import { Router } from  '@angular/router';

@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand' style="margin-right:45px">{{pageTitle}}</a>
        <ul class='nav nav-pills' style="float:left; width:50%">
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
        </ul>
        <ul class='nav nav-pills' style="float:right; width:50%">
          
          <li>
            <a routerLink="/cart" class="button fancy-button">
              <i class="material-icons">shopping_cart</i>
            </a>
          </li>
          <li><a *ngIf="this.authService.loggedIn == false" class='nav-link' routerLinkActive='active' routerLink='/login'>Login</a></li>
          <li><a *ngIf="this.authService.loggedIn == true" (click)="logout()" class="nav-link">Logout</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
  pageTitle: string = 'Elekronics';
  products: IProduct[] = [];

  constructor(private router: Router, public authService: AuthService) {}

  logout() {  
    this.authService.logout();  
    this.router.navigate(['']);  
  }
}