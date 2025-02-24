import { Injectable } from '@angular/core';
import { IProduct } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart : IProduct[] = [];
  
  getCartItems() : IProduct[] {
    return this.cart;
  }
  
  addToCart(product : IProduct) : void {
    const existingProduct = this.cart.find((item)=> item.id === product.id);
    if(existingProduct) {
      existingProduct.quantity! += 1;
    } else{
      this.cart.push({...product, quantity : 1});
    }
  }

  removeFromCart(productId : number) : void {
    this.cart = this.cart.filter((item)=>item.id !==productId);
  }

  clearCart() : void{
    this.cart = [];
  }

}
