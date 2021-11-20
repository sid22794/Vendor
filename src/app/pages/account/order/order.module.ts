import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OrderDetailsComponent, YourOrderComponent } from '.';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: YourOrderComponent },
  { path: ':id', component: OrderDetailsComponent },
];

@NgModule({
  declarations: [OrderDetailsComponent, YourOrderComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OrderModule {}
