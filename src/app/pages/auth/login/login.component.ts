import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HelperService } from 'src/app/helper/helper.service';
import { LoginRequest, LoginResponse } from '../auth.moel';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  isApiProcessing = false;
  constructor(
    private authService: AuthService,
    private helperService: HelperService
  ) {}

  ngOnInit() {
    this.helperService.setTitle('Login');
    this.makeForm();
  }

  makeForm() {
    this.form = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.isApiProcessing = true;
      this.authService.login(this.makeBody()).subscribe(
        (response: LoginResponse) => {
          this.isApiProcessing = false;
          this.helperService.setItem('token', response.accessToken);
          this.helperService.setItem('details', JSON.stringify(response));
          this.helperService.redirect('/');
        },
        (error) => {
          this.isApiProcessing = false;
        }
      );
    }
  }

  makeBody(): LoginRequest {
    return {
      username: this.getFormControlValue('userName'),
      password: this.getFormControlValue('password'),
    };
  }

  getFormControlValue(formControlName: string) {
    return this.form.get(formControlName)?.value;
  }
}
