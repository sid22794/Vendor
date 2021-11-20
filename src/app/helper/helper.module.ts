import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { LeftTrimFormControlDirective } from './directives/left-trim-form-control.directive';

@NgModule({
  declarations: [LeftTrimFormControlDirective],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ReactiveFormsModule, LeftTrimFormControlDirective],
})
export class HelperModule {}
