import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { Cart } from '../Models/cart';
import { StorageService } from './storage.service';
import { AuthService } from './auth.service';
import { User } from '../Models/user';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart[] = [];
  constructor(
    private storage: StorageService,
    private auth: AuthService,
    private product: ProductService
  ) {}

  addcount(): number {
    let cart: Cart[] = this.storage.getCart();
    let loggedInUser: User = this.auth.getLoggedInUser();

    let userCart: Cart | undefined = cart.find(
      (c) => c.user.id === loggedInUser.id
    );
    let count: number = 0;

    if (userCart) {
      for (let product of userCart.cart) {
        if (product.count) count += product.count;
      }
    }
    return count;
  }

  getCount(): number {
    let loggedInUser: User = this.auth.getLoggedInUser();
    let userCart: Cart | undefined = this.cart.find(
      (c) => c.user.id === loggedInUser.id);
    let count: number = 0;
    if (userCart) {
      for (let product of userCart.cart) {
        if (product.count) {
          count += product.count;
        }
      }
    }
    return count;
  }

  addToCart(produtId: Number): void {
    let loggedInUser: User = this.auth.getLoggedInUser();
    let products: Product[] = this.product.getCachedProducts();
    let product: Product | undefined = products.find((p) => p.id == produtId);
    if (product) {
      let userCart: Cart | undefined = this.cart.find(
        (u) => u.user.id === loggedInUser.id
      );

      console.log(userCart);
      if (userCart) {
        let productExist: Product | undefined = userCart.cart.find(
          (p) => p.id === produtId
        );

        if (productExist) {
          let newCart: Product[] = [];
          for (let product of userCart.cart) {
            if (product.id === produtId) {
              newCart.push({ ...product, count: product.count! + 1 });
            } else {
              newCart.push(product);
            }
          }
          userCart.cart = newCart;
        } else {
          userCart?.cart.push({ ...product, count: 1 });
        }
        let updatedCart: Cart[] = this.cart.filter(
          (c) => c.user.id !== loggedInUser.id
        );
        updatedCart.push(userCart);
        this.storage.setCart(updatedCart);
      } else {
        let newCart: Cart = {
          user: loggedInUser,
          cart: [{ ...product, count: 1 }],
        };
        this.cart.push(newCart);
        console.log(this.cart);
        this.storage.setCart(this.cart);
        this.storage.setOrders(this.cart);
      }
    }
  }
}