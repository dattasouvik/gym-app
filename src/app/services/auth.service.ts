import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { mapTo, tap, catchError, map } from 'rxjs/operators';
import { Tokens } from 'src/app/models/tokens';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly ACCESS_TOKEN = 'ACCESS_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private readonly EXPIRES_IN = 'EXPIRES_IN';
  private readonly EXPIRY_DATE = 'EXPIRY_DATE';
  private loggedUser: string;

  private authStatusListenerSubject = new BehaviorSubject<boolean>(false);
  private tokenExpirationTimer: any;

  isLoggedIn$ : Observable<boolean>;
  isLoggedOut$ : Observable<boolean>;
  authStatus$: Observable<boolean> = this.authStatusListenerSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.isLoggedIn$ = this.authStatus$.pipe(map(response => !!response));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));
  }

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
    return this.http.post<any>(url, body, this.httpOptions_1)
      .pipe(
        catchError(this.handleError),
        tap(
          tokens => {
            this.handleAuthentication(tokens as Tokens)
          }
        ));
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

  //To be Modified
  logout() {
    this.removeTokens();
    this.authStatusListenerSubject.next(false);
    //navigate to login
    this.router.navigate(['/login']);
    //clear timer
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    let body = `client_secret=abc123&grant_type=refresh_token&client_id=e0aa8076-6c49-466a-b2a9-ad3276917d70&scope=gymadmin&refresh_token=${this.getRefreshToken()}`
    let url = environment.serverApiUrl + 'oauth/token';
    return this.http.post(url, body, this.httpOptions_1)
      .pipe(tap((tokens: Tokens) => {
        this.handleAuthentication(tokens);
      }));
  }

  getJwtToken() {
    return localStorage.getItem(this.ACCESS_TOKEN);
  }

  isTokenExpired():boolean{
    const access_token = localStorage.getItem(this.ACCESS_TOKEN);
    const expirationDate = localStorage.getItem(this.EXPIRY_DATE);
    const refresh_token = localStorage.getItem(this.REFRESH_TOKEN);

    if (!access_token || !expirationDate || !refresh_token) {
      this.authStatusListenerSubject.next(false);
      return true;
    }
    const now = new Date();
    const expiresIn = new Date(expirationDate).getTime() - now.getTime();
    if (expiresIn > 0) {
      console.log("Token expires in", expiresIn);
      this.authStatusListenerSubject.next(true);
      return false;
    }
    this.authStatusListenerSubject.next(false);
    return true;
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
    localStorage.setItem(this.EXPIRES_IN, JSON.stringify(tokens.expires_in));
  }

  private storeTokenExpiryDate(expiry_date: Date) {
    localStorage.setItem(this.EXPIRY_DATE, expiry_date.toISOString());
  }

  private removeTokens() {
    localStorage.removeItem(this.ACCESS_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
    localStorage.removeItem(this.EXPIRES_IN);
    localStorage.removeItem(this.EXPIRY_DATE);
  }

  private handleAuthentication(
    tokens: Tokens
  ){
    const expirationDate = new Date(new Date().getTime() + tokens.expires_in * 1000);
    //Notify user is authenticated
    this.authStatusListenerSubject.next(true);
    this.autoLogout(tokens.expires_in * 1000);
    this.storeTokens(tokens);
    this.storeTokenExpiryDate(expirationDate);
  }

  private handleError(errorRes: HttpErrorResponse) {
    console.log(errorRes);
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    console.log("Coming from error", errorRes.error.error.message)
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
    }
    return throwError(errorMessage);
  }

  autoLogin(){
    if(this.isTokenExpired){
      this.removeTokens();
    }else{
      this.authStatusListenerSubject.next(true);
      const expirationDate = localStorage.getItem(this.EXPIRY_DATE);
      const expirationDuration =
      new Date(expirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }
}
