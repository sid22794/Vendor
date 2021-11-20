import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HelperModule } from 'src/app/helper/helper.module';

import { AddAddressComponent, AddressListComponent } from '.';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AddressListComponent },
  { path: 'add', component: AddAddressComponent },
];

@NgModule({
  declarations: [AddAddressComponent, AddressListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HelperModule],
})
export class AddressModule {}
