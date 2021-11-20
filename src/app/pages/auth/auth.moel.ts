export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: string;
  username: string;
  email: string;
  roles: string[];
  accessToken: string;
}

export interface SignupRequest {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  roles: string[];
  address: string;
  city: string;
  state: string;
  phone: string;
  payment: string;
  gstNumber: string;
  bankDetails: string;
}
