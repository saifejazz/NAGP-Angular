import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/products/cart.service";
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct } from "src/app/products/product";

@Component({
  selector: 'pm-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  items:any;
  item: IProduct[] = [];

  checkoutForm :any = '';

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    item: this.formBuilder.array(this.items)
  });
  }

  backToCart(): void {
      this.router.navigate(['/cart']);
  }

}
