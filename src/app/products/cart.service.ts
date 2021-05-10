import { Injectable } from '@angular/core';
import { IProduct } from "src/app/products/product";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { ICart } from "src/app/products/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {
    items: ICart[] = [];
    totalPrice: number = 0;

    constructor(
        private http: HttpClient
    ) {}

updatePrice(price: number): void {
    this.totalPrice = price;
}
    addToCart(product: any) {
        if(!this.checkDusplicate(product.productId)) {
            this.items.push({quantity:1, productId: product.productId, price: product.price, productName: product.productName});
            this.totalPrice = this.totalPrice + product.price;
        }
        else {
           this.items.forEach((item: any, index: number): void => {
           if(item.productId === product.productId){
               this.items[index].quantity += 1;
               this.totalPrice = this.totalPrice + item.price;
           }
        }) 
        }
    }

    getItems() {
        // this.items.forEach((item: any, index: number): void => {
        //     this.cartItem.push({quantity:1, productId: item.productId, price: item.price, productName: item.productName});
        // })
        // //return this.items;
        // console.log(this.cartItem);
        return this.items;
    }

    clearCart() {
        this.items = [];
        this.totalPrice = 0;
        return this.items;
    }

    updatedItems(items: ICart[]){
        this.items = items;
    }

    increaseQty(payload: any) {
        return this.http.post(`${environment.baseURL}/cart`, payload);
    }

    getShippingPrices() {
        return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
    }

    checkDusplicate(id: number): boolean {
        let result: boolean = false;
        this.items.forEach((item: any, index: number): void => {
        if(item.productId === id)
            result = true;  
        })
        return result;
    }

}