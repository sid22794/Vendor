import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginSecurityComponent } from './login-security.component';

const routes: Routes = [{ path: '', component: LoginSecurityComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [LoginSecurityComponent],
})
export class LoginSecurityModule {}
