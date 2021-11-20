import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EncryptDecryptService } from './encrypt-decrypt.service';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  readonly regularExpression = {
    firstName: /^[a-z ,.'-]+$/i,
    password: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/,
    mobile: '[0-9]{5,13}',
    email: '^[a-zA-Z0-9@-_.]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
  };
  isToastVisible = false;
  toastMessage: string = '';
  toastTimeOut: any;
  constructor(
    private router: Router,
    private titleService: Title,
    private encryptService: EncryptDecryptService
  ) {}

  redirect(path: string) {
    this.router.navigate([path]);
  }

  redirectWithParams(path: string, params: string) {
    this.router.navigate([path, params]);
  }

  redirectWithQueryParams(path: string, queryParams: any) {
    this.router.navigate([path], { queryParams });
  }

  showToastMessage(message: string) {
    this.toastMessage = message;
    this.isToastVisible = true;
    if (this.toastTimeOut) clearTimeout(this.toastTimeOut);
    this.toastTimeOut = setTimeout(() => {
      this.isToastVisible = false;
    }, 4000);
  }

  hideToastMessage() {
    clearTimeout(this.toastTimeOut);
    this.isToastVisible = false;
  }

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  setItem(keyName: string, data: string): void {
    localStorage.setItem(
      `vendor_${keyName}`,
      this.encryptService.encrypt(data)
    );
  }

  removeItem(keyName: string): void {
    localStorage.removeItem(`vendor_${keyName}`);
  }

  getItem(keyName: string): string {
    const data = localStorage.getItem(`vendor_${keyName}`);
    return data ? this.encryptService.decrypt(data) : '';
  }

  clearLocalStorage() {
    let keys = Object.keys(localStorage),
      i = keys.length;
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].startsWith('vendor_')) {
        localStorage.removeItem(keys[i]);
      }
    }
  }
}
