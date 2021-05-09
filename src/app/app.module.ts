import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from "src/app/home/welcome.component";
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from "src/app/products/product-detail.guard";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ProductModule } from './products/product.module';
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'welcome', component: WelcomeComponent},
      {path:'', redirectTo: 'welcome', pathMatch: 'full'},
      {path:'**', redirectTo: 'welcome', pathMatch: 'full'},
    ]),
    BrowserAnimationsModule,
    MatSliderModule,
    ProductModule,
    MatSelectModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
