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
    ) { }

    updatePrice(price: number): void {
        this.totalPrice = price;
        localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice));
    }

    saveToLocalStorage(){
        var cartItems = JSON.stringify(this.items);
        localStorage.setItem("cartData", cartItems);
    }

    addToCart(product: any) {
        if (!this.checkDusplicate(product.productId)) {
            this.items.push({ quantity: 1, productId: product.productId, price: product.price, productName: product.productName });
            this.totalPrice = this.totalPrice + product.price;
        } else {
            this.items.forEach((item: any, index: number): void => {
                if (item.productId === product.productId) {
                    this.items[index].quantity += 1;
                    this.totalPrice = this.totalPrice + item.price;
                }
            })
        }
        this.saveToLocalStorage(); 
        localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice));       
    }

    deleteFromCart(product: any) {

    }

    getItems() {
        const result = localStorage.getItem("cartData");
        if(result){
            return JSON.parse(result);
        }else{
            return null;
        }
    }

    clearCart() {
        this.items = [];
        this.items.length = 0;
        this.totalPrice = 0;
        localStorage.setItem("totalPrice", "0");
        localStorage.setItem("cartData", "");
        return this.items;
    }

    updatedItems(items: ICart[]) {
        this.items = items;
       this.saveToLocalStorage();
    }

    increaseQty(payload: any) {
        return this.http.post(`${environment.baseURL}/cart`, payload);
    }

    getShippingPrices() {
        return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
    }

    checkDusplicate(id: number): boolean {
        let result: boolean = false;
        this.items.forEach((item: any, index: number): void => {
            if (item.productId === id)
                result = true;
        })
        return result;
    }

}