import { Directive, ElementRef, HostListener } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Directive({
  selector: '[appLeftTrimFormControl]',
})
export class LeftTrimFormControlDirective {
  constructor(
    private el: ElementRef,
    private formControlName: FormControlName
  ) {}

  @HostListener('input', ['$event']) onInputChange() {
    const initialValue = this.el.nativeElement.value;
    const updatedValue = initialValue.replace(/^\s+/, '');
    this.el.nativeElement.value = updatedValue;
    this.formControlName.control.patchValue(updatedValue);
  }
}
