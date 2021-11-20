import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailsComponent } from './product-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductDetailsComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ProductDetailsComponent],
})
export class ProductDetailsModule {}
