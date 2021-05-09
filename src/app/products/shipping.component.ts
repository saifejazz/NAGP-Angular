import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/products/cart.service";

@Component({
  selector: 'pm-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts = this.cartService.getShippingPrices();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

}
