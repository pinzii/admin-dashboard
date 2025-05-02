import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:3000/users';
  private authStatus = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) {}

  

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}?email=${email}&password=${password}`).pipe(
      map(users => {
        if (users.length > 0) {
          const user = users[0];
          localStorage.setItem('token', user.token);
          localStorage.setItem('username', user.username);
          localStorage.setItem('email', user.email);

          this.authStatus.next(true);
          return user;
        } else {
          throw new Error('Credenciales inválidas');
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.authStatus.next(false);
  }

  isAuthenticated(): Observable<boolean> {
    return this.authStatus.asObservable();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  register(
    username: string, 
    email: string, 
    password: string): Observable<any> {
    const user = { 
      username, 
      email, 
      password, 
      token: this.generateToken() };
    return this.http.post(this.baseUrl, user);
  }
  
  private generateToken(): string {
    return Math.random().toString(36).slice(2);
  }
  
}

