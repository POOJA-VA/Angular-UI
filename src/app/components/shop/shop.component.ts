import { Component } from '@angular/core';
import { Cart } from 'src/app/Models/cart';
import { Product } from 'src/app/Models/product';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
})
export class ShopComponent {
  order: Product[] = [];
  orders: Cart[] = [];

  constructor(
    private storage: StorageService,
    private authService: AuthService
  ) {
    this.orders = this.storage.getOrders();

    console.log(this.orders);

    for (let o of this.orders) {
      let loggedInUser: User = this.authService.getLoggedInUser();

      if (o.user.id === loggedInUser.id) {
        this.order = o.cart;
      }
    }
  }
}
