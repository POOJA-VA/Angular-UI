import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './common/auth.guard';
import { IntroductionComponent } from './components/introduction/introduction.component';

const routes: Routes = [  
{ path: 'home',component: HomeComponent},
{ path: '',component: IntroductionComponent},
{ path: 'login',component: LoginComponent},
{ path: 'register',component: RegisterComponent},
{ path: 'product/:id',component: ProductsComponent},
{ path: 'orders',component: ShopComponent},
{ path: 'cart',component: CartComponent, canActivate:[authGuard]},
{ path: '**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }