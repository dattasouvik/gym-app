import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mapTo, tap, catchError } from 'rxjs/operators';
import { Tokens } from 'src/app/models/tokens';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private readonly ACCESS_TOKEN = 'ACCESS_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private httpOptions_1 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  // getLogin(endpoint: string, credentials: any): Observable<any> {
  //   let url = endpoint;
  //   let body = {
  //     "name": credentials.username,
  //     "pass": credentials.password
  //   }

  //   return this.http.post(url, body, this.httpOptions);
  // }

  // getToken(endpoint: string,credentials:any): Observable<any> {
  //   console.log(credentials);
  //   let body=`username=${credentials.username}&password=${credentials.password}&client_secret=abc123&grant_type=password&client_id=e0aa8076-6c49-466a-b2a9-ad3276917d70&scope=gymadmin`
  //   let url = endpoint;

  //   return this.http.post(url, body, this.httpOptions_1);
  // }

  Login(user: { username: string, password: string }): Observable<boolean> {
    let body = `username=${user.username}&password=${user.password}&client_secret=abc123&grant_type=password&client_id=e0aa8076-6c49-466a-b2a9-ad3276917d70&scope=gymadmin`
    let url = environment.serverApiUrl + 'oauth/token';
    return this.http.post(url, body, this.httpOptions_1)
      .pipe(
        tap(tokens => this.doLoginUser(user.username, tokens as Tokens)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  // logout() {
  //   return this.http.post<any>(`${config.apiUrl}/logout`, {
  //     'refreshToken': this.getRefreshToken()
  //   }).pipe(
  //     tap(() => this.doLogoutUser()),
  //     mapTo(true),
  //     catchError(error => {
  //       alert(error.error);
  //       return of(false);
  //     }));
  // }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    let body = `client_secret=abc123&grant_type=refresh_token&client_id=e0aa8076-6c49-466a-b2a9-ad3276917d70&scope=gymadmin&refresh_token=${this.getRefreshToken()}`
    let url = environment.serverApiUrl + 'oauth/token';
    return this.http.post(url, body, this.httpOptions_1)
      .pipe(tap((tokens: Tokens) => {
        this.storeJwtToken(tokens.access_token);
        this.storeJwtToken(tokens.refresh_token);
      }));
  }

  getJwtToken() {
    return localStorage.getItem(this.ACCESS_TOKEN);
  }

  private doLoginUser(username: string, tokens: Tokens) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.ACCESS_TOKEN, jwt);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.ACCESS_TOKEN, tokens.access_token);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh_token);
  }

  private removeTokens() {
    localStorage.removeItem(this.ACCESS_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }

}
