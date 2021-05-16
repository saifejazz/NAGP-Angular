import { TestBed } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { ProductListComponent } from "src/app/products/product-list.component";
import { ConvertToSpacesPipe } from "src/app/shared/convert-to-spaces.pipe";
import { ProductDetailComponent } from "src/app/products/product-detail.component";
import { RouterModule } from "@angular/router";
import { ProductDetailGuard } from "src/app/products/product-detail.guard";
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/products/login.component';
import { CartComponent } from 'src/app/products/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from 'src/app/products/checkout.component';
import { MatSelectModule } from "@angular/material/select";
import { AuthGuard } from "src/app/auth.guard";
import { SuccessComponent } from 'src/app/products/success.component';
import { AuthService } from './auth.service';
import { Router } from  '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from "src/app/home/welcome.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ProductModule } from './products/product.module';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
