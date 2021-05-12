import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/products/cart.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  submitted = false;
  public totalPrice: number = 0;
  public tax: number = 0;
  public shippingCharge: number = 0;
  public totalAmount: number = 0;

  checkoutForm :any = '';

  constructor(
    public cartService: CartService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onSubmit(): void {
    // Process checkout data here
    this.submitted = true;

    // stop here if form is invalid
    if (this.checkoutForm.invalid) {
        return;
    }

    this.items = this.cartService.clearCart();
    this.cartService.totalPrice = 0;
    localStorage.setItem("totalPrice", "0");
    //console.warn('Your order has been submitted', this.checkoutForm.value);
    console.log(this.checkoutForm.value);
    this.checkoutForm.reset();
    //window.alert('Your order has been submitted');   
    this.router.navigate(['./success']);
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();

    this.totalPrice = Number(localStorage.getItem("totalPrice"));
    this.tax = this.totalPrice/5;
    this.shippingCharge = this.totalPrice/20;
    this.totalAmount += this.tax + this.shippingCharge;

    this.checkoutForm = this.formBuilder.group({
    name: ['', Validators.required],
    mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    email: ['', [Validators.required, Validators.email]],
    billingAddress: ['', Validators.required],
    shippingAddress: ['', Validators.required],
    //item: this.formBuilder.array(this.items)
  });
}

// convenience getter for easy access to form fields
    get f() { return this.checkoutForm.controls; }

  backToCart(): void {
      this.router.navigate(['/cart']);
  }

}
