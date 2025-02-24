import { Component } from '@angular/core';
import { IProduct } from '../../model/product.model';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterLink, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})


export class ProductDetailsComponent {

  product !: IProduct;


  constructor(private router: ActivatedRoute , private productService :  ProductService, private cartService : CartService) {};

  ngOnInit() : void {
    const id = +this.router.snapshot.paramMap.get('id')!;
    this.productService.getProductById(id).subscribe((data)=>{
      this.product = data;
    })
  }
  
  


  addToCart() : void {
    this.cartService.addToCart(this.product);
  }
}


