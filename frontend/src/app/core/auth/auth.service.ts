import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('isAuthenticated');
      this.isAuthenticated.set(saved === 'true');
    }
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '123456') {
      sessionStorage.setItem('isAuthenticated', 'true');
      this.isAuthenticated.set(true);
      return true;
    }

    return false;
  }

  logout(): void {
    sessionStorage.removeItem('isAuthenticated');
    this.isAuthenticated.set(false);
  }

  checkAuth(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }

    const ok = sessionStorage.getItem('isAuthenticated') === 'true';
    this.isAuthenticated.set(ok);
    return ok;
  }
}