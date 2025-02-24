import { Component } from '@angular/core';
import { IProduct } from '../../model/product.model';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartItems : IProduct[] = [];


  constructor(private cartService : CartService){}

  ngOnInit() : void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(productId : number) : void{
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems();
  }

  
}
