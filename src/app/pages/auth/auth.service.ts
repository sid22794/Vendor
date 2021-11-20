import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LoginRequest, LoginResponse, SignupRequest } from './auth.moel';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly baseUrl: string = `${environment.baseUrl}api/auth/`;
  constructor(private http: HttpClient) {}

  login(requestBody: LoginRequest) {
    return this.http.post<LoginResponse>(`${this.baseUrl}signin`, requestBody);
  }

  signUp(requestBody: SignupRequest) {
    return this.http.post(`${this.baseUrl}signup`, requestBody);
  }
}
