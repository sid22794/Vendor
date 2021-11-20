import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AddPaymentOptionsComponent, PaymentOptionsListComponent } from '.';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PaymentOptionsListComponent },
  { path: 'add', component: AddPaymentOptionsComponent },
];

@NgModule({
  declarations: [AddPaymentOptionsComponent, PaymentOptionsListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PaymentOptionsModule {}
