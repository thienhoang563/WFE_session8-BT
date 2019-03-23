import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  isAuthenticated(): boolean {
    return !!this.user;
  }
  login() {
    this.user = {
      name: 'thien',
      token: 'token'
    };
  }
  logout() {
    this.user = null;
  }
  constructor() { }
}
