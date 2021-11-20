import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helper/guards/auth.guard';
import { PageGuard } from './helper/guards/page.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./pages/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'login-security',
    canLoad: [PageGuard],
    loadChildren: () =>
      import('./pages/account/login-security/login-security.module').then(
        (m) => m.LoginSecurityModule
      ),
  },
  {
    path: 'payment-options',
    canLoad: [PageGuard],
    loadChildren: () =>
      import('./pages/account/payment-options/payment-options.module').then(
        (m) => m.PaymentOptionsModule
      ),
  },
  {
    path: 'product-details/:id',
    loadChildren: () =>
      import('./pages/product-details/product-details.module').then(
        (m) => m.ProductDetailsModule
      ),
  },
  {
    path: 'your-account',
    canLoad: [PageGuard],
    loadChildren: () =>
      import('./pages/account/your-account/your-account.module').then(
        (m) => m.YourAccountModule
      ),
  },
  {
    path: 'your-address',
    canLoad: [PageGuard],
    loadChildren: () =>
      import('./pages/account/address/address.module').then(
        (m) => m.AddressModule
      ),
  },
  {
    path: 'your-order',
    canLoad: [PageGuard],
    loadChildren: () =>
      import('./pages/account/order/order.module').then((m) => m.OrderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
