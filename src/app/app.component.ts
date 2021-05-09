import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { IProduct } from "src/app/products/product";
import { AuthService } from "src/app/auth.service";
import { Router } from  '@angular/router';

@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
          <li style="floaf:right"><a *ngIf="this.authService.loggedIn == false" class='nav-link' routerLinkActive='active' routerLink='/login'>Login</a></li>
          <li style="floaf:right">
          <a routerLink="/cart" class="button fancy-button">
            <i class="material-icons">shopping_cart</i>
          </a></li>
          <li><button *ngIf="this.authService.loggedIn == true" (click)="logout()" class="btn btn-danger">Logout</button></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
  products: IProduct[] = [];

  constructor(private router: Router, public authService: AuthService) {}

  logout() {  
    this.authService.logout();  
    this.router.navigate(['']);  
  }
}