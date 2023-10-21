import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { count } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private auth:AuthService, private route:Router,private cart:CartService) { }

    logout() {
      this.auth.logout();
      this.route.navigate(['login'],{replaceUrl: true});
    }

    getcount(): number{
      let count=this.cart.getCount();
      return count ? count:0;
    }
}