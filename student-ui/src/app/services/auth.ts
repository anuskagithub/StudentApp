import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7100/api/auth';

  constructor(private http: HttpClient) {}

  register(data: { userName: string; password: string }) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(data: { userName: string; password: string }) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, data);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
