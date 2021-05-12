import { NgModule } from '@angular/core';
import { ProductListComponent } from "src/app/products/product-list.component";
import { ConvertToSpacesPipe } from "src/app/shared/convert-to-spaces.pipe";
import { ProductDetailComponent } from "src/app/products/product-detail.component";
import { RouterModule } from "@angular/router";
import { ProductDetailGuard } from "src/app/products/product-detail.guard";
import { SharedModule } from '../shared/shared.module';
import { CategoriesComponent } from './categories.component';
import { LoginComponent } from './login.component';
import { CartComponent } from './cart.component';
import { ShippingComponent } from './shipping.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout.component';
import { MatSelectModule } from "@angular/material/select";
import { AuthGuard } from "src/app/auth.guard";
import { SuccessComponent } from './success.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent,
    CategoriesComponent,
    LoginComponent,
    CartComponent,
    ShippingComponent,
    CheckoutComponent,
    SuccessComponent,
  ],
  imports: [
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forChild([
      {path:'products', component: ProductListComponent},
      {path:'cart', component: CartComponent, canActivate: [AuthGuard]},
      {path:'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
      {path:'success', component: SuccessComponent, canActivate: [AuthGuard]},
      {path: 'shipping', component: ShippingComponent},
      {path:'login', component: LoginComponent},
      {
        path:'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent,
      },
      {
        path:'categories',
        component: CategoriesComponent,
      },
      {
        path:'products/:cid',
        component: ProductListComponent,
      },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
