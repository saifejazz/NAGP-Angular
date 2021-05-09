import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct } from "src/app/products/product";
import { ProductService } from "src/app/products/product.service";
import { CartService } from "src/app/products/cart.service";

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  errorMessage = '';
  product: IProduct | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  // function to make a back button on pdp
  onBack(): void {
      this.router.navigate(['/products']);
  }

}
