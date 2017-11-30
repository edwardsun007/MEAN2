import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../user';

@Injectable()
export class AuthService {
  private base = '/auth/';

  constructor(
    private http: Http,
    private cookieService: CookieService,
  )
 {}

  login(user: User): Promise<User> {
    return this.http.post(this.base + 'login', user)
            .map(response => response.json())
            .toPromise();
  }

  register(user: User): Promise<User> {
    return this.http.post(this.base + 'register', user)
            .map(response => response.json())
            .toPromise();
  }

  logout(): Promise<boolean> {
    return this.http.delete(this.base + 'logout')
            .map(response => response.json())
            .toPromise();
  }

  isAuthed(): boolean {
    const expired = parseInt(this.cookieService.get('expiration'), 10);
    const userId = this.cookieService.get('userID');
    const session = this.cookieService.get('session');

    return Boolean(session && userId && expired && expired > Date.now());
  }
}
