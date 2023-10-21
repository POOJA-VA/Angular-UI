import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { Product } from '../Models/product';
import { Cart } from '../Models/cart';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  products: Product[] = [];
  cart: Cart[] = [];

  users: User[] = [{ id: 1, email: 'pooja@123.com', password: 'Hai@1234' }];

  loadUser() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem('users') as string);
  }

  setCart(cart: Cart[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart(): Cart[] {
    let cart = JSON.parse(localStorage.getItem('cart') as string);
    if (cart === null) {
      cart = [];
    }
    return cart;
  }

  adduser(user: User, pass: any): void {
    let userd = {
      id: this.users.length + 1,
      name: user.name,
      email: user.email,
      password: pass,
    };
    this.users.push(userd);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  getLoggedInUser(): User {
    return JSON.parse(localStorage.getItem('loggedInUser') as string);
  }

  setLoggedInUser(user: User): void {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }

  removeLoggedInUser(): void {
    localStorage.removeItem('loggedInUser');
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('loggedInUser') !== null;
  }

  saveProducts(products: Product[]): void {
    localStorage.setItem('products', JSON.stringify(products));
  }

  getCachedProducts(): Product[] {
    return JSON.parse(localStorage.getItem('products') as string);
  }

  addProducts(product: Product[]): void {
    localStorage.setItem('products', JSON.stringify(product));
  }

  getOrders(): Cart[] {
    return JSON.parse(localStorage.getItem('orders') as string);
  }

  setOrders(order: Cart[]) {
    localStorage.setItem('orders', JSON.stringify(order));
  }

  getAllUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') as string);
  }
}
