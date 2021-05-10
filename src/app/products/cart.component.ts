import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/products/cart.service";
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct } from "src/app/products/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  quantity: number = 1;
  items:any;
  item: IProduct[] = [];
  public totalPrice: number = 0;

  checkoutForm :any = '';

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.totalPrice;
  //   this.checkoutForm = this.formBuilder.group({
  //   name: '',
  //   address: '',
  //   item: this.formBuilder.array(this.items)
  // });
  }

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  toCheckout(): void {
      this.router.navigate(['/checkout']);
  }

  // _increamentQTY(id: number, quantity: number): void {
  //   const payload = {
  //     productId: id,
  //     quantity,
  //   };
  //   this.http.increaseQty(payload).subscribe(() => {
  //     this._getCart();
  //     alert('Product Added');
  //   });
  // }

  addQty(value: number) {
    console.log(value);
    this.items[value].quantity += 1;
    this.totalPrice = this.items[value].price + this.totalPrice;
    this.cartService.updatedItems(this.items);
    this.cartService.updatePrice(this.totalPrice);
  }

  minusQty(value: number) {
    console.log(value);
    this.items[value].quantity -= 1;
    this.totalPrice = this.totalPrice - this.items[value].price;
    this.cartService.updatedItems(this.items);
    this.cartService.updatePrice(this.totalPrice);
  }

}
