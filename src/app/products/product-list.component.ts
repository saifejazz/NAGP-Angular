import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from './product'; 
import { ProductService } from "src/app/products/product.service";
import { Subscription } from "rxjs";
import { MatSelectModule } from '@angular/material/select';

@Component({
    //selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy{
    pageTitle : string = "Product List";
    categId : string = "";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = '';
    sub!: Subscription;
    //listFilter: string = 'cart';

    private _listFilter: string = '';
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string) {
      this._listFilter = value;
      console.log('In getter: ', value);
      this.filteredProducts = this.performFilter(value);
    }

    public filteredProducts: IProduct[] = [];

    public products : IProduct[] = [];

    constructor(private productService: ProductService) {}

    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product:IProduct) =>
        product.productName.toLocaleLowerCase().includes(filterBy));
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    // ngOnInit(): void {
    //   //console.log('In OnInit');
    //   //this.products = this.productService.getProducts();
    //   this.productService.getProducts().subscribe((response)=>{
    //     this.products = response;
    //     this.filteredProducts = this.products;
    //   });
    //   // this.filteredProducts = this.products;
    //   // console.log(this.filteredProducts);
    //   //this._listFilter = 'cart';
    // }

    ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err  => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    console.log("let's unsubscribe");
    this.sub.unsubscribe();
  }

  categoryChange(event: any): void {
    //  (selectionChange)="categoryChange($event)"
    // this.categId = "a";
    console.log(event);
    this.categId = event.value;
    console.log(this.categId);
  }

    onRatingClicked(message: string): void {
      this.pageTitle = 'Product List'+message;
    }
}