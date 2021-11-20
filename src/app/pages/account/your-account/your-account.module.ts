import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { YourAccountComponent } from './your-account.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: YourAccountComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [YourAccountComponent],
})
export class YourAccountModule {}
