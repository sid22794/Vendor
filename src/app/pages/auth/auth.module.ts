import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent, SignupComponent } from '.';
import { HelperModule } from '../../helper/helper.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [CommonModule, HelperModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
