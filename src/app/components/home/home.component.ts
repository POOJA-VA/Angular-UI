import { Component } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private product:ProductService,private cart: CartService, private storage:StorageService) {}

ngOnInit(): void{
  this.product.getAllProducts().subscribe({
    next:(data: Product[]) => {
      console.log(data);
      this.products = data;
      this.storage.saveProducts(this.products);
    },

    complete: () => {
      console.log('completed');
    },

    error: (error: Error) => {
      console.log('message:', error.message);
      console.log('Name',error.name);
    }
  });
}

addToCart(id:number) {
  this.cart.addToCart(id);
}
}