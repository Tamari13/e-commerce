import { Component } from '@angular/core';
import { IProduct } from '../../model/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products : IProduct[] = [];

  filteredProducts: IProduct[] = [];
  categories: string[] = [];


  constructor(private productService : ProductService, private cartService : CartService){}

  ngOnInit() : void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=data;
      this.filteredProducts = data; 
      this.categories = Array.from(
        new Set(data.map((product) => product.category))
      );
    })
  }

  filterProducts(event: Event): void {
    const selectedCategory = (event.target as HTMLSelectElement).value;
    this.filteredProducts = selectedCategory
      ? this.products.filter((product) => product.category === selectedCategory)
      : this.products;
  }

  addToCart(product : IProduct) : void{
     this.cartService.addToCart(product);
  }

}
