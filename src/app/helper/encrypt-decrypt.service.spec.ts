/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EncryptDecryptService } from './encrypt-decrypt.service';

describe('Service: EncryptDecrypt', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EncryptDecryptService]
    });
  });

  it('should ...', inject([EncryptDecryptService], (service: EncryptDecryptService) => {
    expect(service).toBeTruthy();
  }));
});
