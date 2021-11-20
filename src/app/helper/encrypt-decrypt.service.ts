import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncryptDecryptService {
  readonly encryptKey = 'vendor-portal-6546';

  constructor() {}

  get jsonFormatter() {
    return {
      stringify: (cipherParams: any) => {
        const jsonObj = {
          ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64),
          iv: null,
          s: null,
        };
        if (cipherParams.iv) {
          jsonObj.iv = cipherParams.iv.toString();
        }
        if (cipherParams.salt) {
          jsonObj.s = cipherParams.salt.toString();
        }
        return JSON.stringify(jsonObj);
      },
      parse: (jsonStr: any) => {
        const jsonObj = JSON.parse(jsonStr);
        const cipherParams = CryptoJS.lib.CipherParams.create({
          ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct),
        });
        if (jsonObj.iv) {
          cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv);
        }
        if (jsonObj.s) {
          cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s);
        }
        return cipherParams;
      },
    };
  }

  encrypt(value: any) {
    const key = this.encryptKey;
    value = value instanceof String ? value : JSON.stringify(value);
    const encrypted = CryptoJS.AES.encrypt(value, key, {
      format: this.jsonFormatter,
      mode: CryptoJS.mode.CBC,
    }).toString();
    return encrypted;
  }

  decrypt(value: any): any {
    const key = this.encryptKey;
    const decrypted = CryptoJS.AES.decrypt(value, key, {
      format: this.jsonFormatter,
    }).toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  }
}
