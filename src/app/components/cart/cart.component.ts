import { Component } from '@angular/core';
import { Cart } from 'src/app/Models/cart';
import { Product } from 'src/app/Models/product';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  products: Product[] = [];
  cart: Cart[] = [];

  constructor(
    private storage: StorageService,
    private authService: AuthService) {
    this.cart = this.storage.getCart();
    for (let c of this.cart) {
      let loggedInUser: User = this.authService.getLoggedInUser();
      if (c.user.id === loggedInUser.id) this.products = c.cart;
    }
  }

  // delete(id: number): Detail[] {
  //   this.details = this.details.filter((dir) => dir.id !== id);
  //   return this.details;
  // }

  // edit(id: number): Detail[] {
  //   this.editId = id;
  //   const checkId = this.details.find((num) => num.id === id);
  //   if (checkId) {
  //     this.name = checkId.name;
  //     this.email = checkId.email;
  //     this.phnNumber = checkId.phoneNumber;
  //   }
  //   this.btnRef = 'update';
  //   console.log('edit');
  //   return this.details;
  // }
}
