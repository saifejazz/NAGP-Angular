import { Component, LOCALE_ID, Inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { IProduct } from "src/app/products/product";
import { AuthService } from "src/app/auth.service";
import { Router } from  '@angular/router';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  pageTitle: string = 'Elekronics';
  products: IProduct[] = [];

  languageList = [  
    { code: 'en', label: 'English' },  
    { code: 'es', label: 'Espanol' },
    { code: 'fr', label: 'French' } 
  ];

  constructor(
    private router: Router, 
    public authService: AuthService,
    @Inject(LOCALE_ID) protected localeId: string
    ) {}

  logout() {  
    this.authService.logout();  
    this.router.navigate(['']);  
  }
}