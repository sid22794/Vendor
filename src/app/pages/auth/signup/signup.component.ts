import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HelperService } from 'src/app/helper/helper.service';
import { SignupRequest } from '../auth.moel';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  isApiProcessing = false;
  constructor(
    private authService: AuthService,
    private helperService: HelperService
  ) {}

  ngOnInit() {
    this.helperService.setTitle('Sign Up');
    this.makeForm();
  }

  makeForm() {
    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.helperService.regularExpression.firstName),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.helperService.regularExpression.firstName),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.helperService.regularExpression.email),
      ]),
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(this.helperService.regularExpression.password),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  signUp() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.isApiProcessing = true;
      this.authService.signUp(this.makeBody()).subscribe(
        (response: any) => {
          this.isApiProcessing = false;
          this.helperService.showToastMessage('Account created successfully.');
          this.helperService.redirect('/auth/login');
        },
        (error) => {
          this.isApiProcessing = false;
        }
      );
    }
  }

  checkPasswords() {
    if (this.form.get('confirmPassword')?.value)
      this.form
        .get('confirmPassword')
        ?.setErrors(
          this.form.get('password')?.valid &&
            this.form.get('password')?.value !==
              this.form.get('confirmPassword')?.value
            ? { passwordNotMatched: true }
            : null
        );
  }

  makeBody(): SignupRequest {
    return {
      firstName: this.getFormControlValue('firstName'),
      lastName: this.getFormControlValue('lastName'),
      email: this.getFormControlValue('email'),
      username: this.getFormControlValue('userName'),
      password: this.getFormControlValue('password'),
      address: 'default',
      bankDetails: 'default',
      city: 'default',
      gstNumber: 'default',
      payment: 'default',
      phone: 'default',
      roles: ['vendor'],
      state: 'default',
    };
  }

  getFormControlValue(formControlName: string) {
    return this.form.get(formControlName)?.value;
  }
}
