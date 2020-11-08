import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { mapTo, tap, catchError, map, exhaustMap } from 'rxjs/operators';
import { AuthConfig } from 'src/app/auth-config';
import { Tokens } from 'src/app/models/tokens';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

interface UserResponse {
  email: string;
  id: number;
  name: string;
  role: [];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly ACCESS_TOKEN = 'ACCESS_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private readonly EXPIRES_IN = 'EXPIRES_IN';
  private readonly EXPIRY_DATE = 'EXPIRY_DATE';
  private readonly USER_DATA = 'USER_DATA';

  private userSubject = new BehaviorSubject<UserResponse|null>(null);
  private authStatusListenerSubject = new BehaviorSubject<boolean>(false);
  private tokenExpirationTimer: any;

  isLoggedIn$ : Observable<boolean>;
  isLoggedOut$ : Observable<boolean>;
  public readonly authStatus$: Observable<boolean> = this.authStatusListenerSubject.asObservable();
  public readonly user$: Observable<UserResponse> = this.userSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private httpService: HttpService
  ) {
    this.isLoggedIn$ = this.authStatus$.pipe(map(response => !!response));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));
  }


  Login(user: { username: string, password: string }): Observable<any> {
    let body= new FormData();
    body.append("grant_type", 'password');
    body.append("client_id", AuthConfig.CLIENT_ID);
    body.append("client_secret", AuthConfig.CLIENT_SECRET);
    body.append("scope", AuthConfig.SCOPE);
    body.append("username", user.username);
    body.append("password", user.password);
    let url = environment.serverApiUrl + 'oauth/token';
    return this.http.post<any>(url, body)
      .pipe(
        exhaustMap( (tokenInfo:Tokens) => {
          let headers = new HttpHeaders().set('Authorization', `Bearer ${tokenInfo.access_token}`);
          return this.httpService.get<any>('user-extra-data?_format=json',{
            headers
          }).pipe(
            map(response => {
              return response.map(userInfo => {
                return {
                  tokenInfo,
                  userInfo
                }
              })
            }),
          );
        }),
        tap(([{userInfo,tokenInfo}]) => this.handleAuthentication(userInfo,tokenInfo)),
        catchError(this.handleError)
      );
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
    return this.httpService.get('user-logout?_format=json').pipe(
      tap((response)=>{
        //TBD
        this.removeTokens();
        this.authStatusListenerSubject.next(false);
        this.userSubject.next(null);
        //navigate to login
        this.router.navigate(['/login']);
        //clear timer
        if (this.tokenExpirationTimer) {
          clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
      })
    )
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    let body= new FormData();
    body.append("grant_type", 'refresh_token');
    body.append("client_id", AuthConfig.CLIENT_ID);
    body.append("client_secret", AuthConfig.CLIENT_SECRET);
    body.append("scope", AuthConfig.SCOPE);
    body.append("refresh_token", this.getRefreshToken());
    let url = environment.serverApiUrl + 'oauth/token';
    return this.http.post(url, body)
    .pipe(
      exhaustMap( (tokenInfo:Tokens) => {
        let headers = new HttpHeaders().set('Authorization', `Bearer ${tokenInfo.access_token}`);
        return this.httpService.get<any>('user-extra-data?_format=json',{
          headers
        }).pipe(
          map(response => {
            return response.map(userInfo => {
              return {
                tokenInfo,
                userInfo
              }
            })
          }),
        );
      }),
      tap(([{userInfo,tokenInfo}]) => this.handleAuthentication(userInfo,tokenInfo)),
      catchError(this.handleError)
    );
  }

  getJwtToken() {
    return localStorage.getItem(this.ACCESS_TOKEN);
  }


  private checkStorageData(accessToken, expirationDate,
    refreshToken,userData):Boolean{
      const access_token = localStorage.getItem(accessToken);
      const expiration_date = localStorage.getItem(expirationDate);
      const refresh_token = localStorage.getItem(refreshToken);
      const user_data: UserResponse = JSON.parse(localStorage.getItem(userData));
      if (!access_token || !expiration_date || !refreshToken || !user_data) {
        return false;
      }
      return true;
  }

  isTokenExpired():boolean{

    const storageStatus = this.checkStorageData(
      this.ACCESS_TOKEN,
      this.EXPIRY_DATE,
      this.REFRESH_TOKEN,
      this.USER_DATA
      );

    console.log("Storage Valdity", storageStatus);
    if(!storageStatus){
      this.authStatusListenerSubject.next(false);
      return true;
    }

    const expirationDate = localStorage.getItem(this.EXPIRY_DATE);
    const now = new Date();
    const expiresIn = new Date(expirationDate).getTime() - now.getTime();
    if (expiresIn > 0) {
      console.log("Token expires in", expiresIn);
      this.authStatusListenerSubject.next(true);
      return false;
    }else{
      this.authStatusListenerSubject.next(false);
      return true;
    }
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

  private storeUserData(user: UserResponse) {
    localStorage.setItem(this.USER_DATA, JSON.stringify(user));
  }

  private removeTokens() {
    localStorage.removeItem(this.ACCESS_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
    localStorage.removeItem(this.EXPIRES_IN);
    localStorage.removeItem(this.EXPIRY_DATE);
    localStorage.removeItem(this.USER_DATA);
  }

  private handleAuthentication(
    user: UserResponse,
    tokens: Tokens
  ){
    const expirationDate = new Date(new Date().getTime() + tokens.expires_in * 1000);
    //Notify user is authenticated
    this.authStatusListenerSubject.next(true);
    this.userSubject.next(user);
    this.autoLogout(tokens.expires_in * 1000);
    this.storeTokens(tokens);
    this.storeUserData(user);
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
    const tokenExpired = this.isTokenExpired();
    console.log("Expiry", tokenExpired);
    if(!tokenExpired){
      const user: UserResponse = JSON.parse(localStorage.getItem(this.USER_DATA));
      this.authStatusListenerSubject.next(true);
      this.userSubject.next(user);
      const expirationDate = localStorage.getItem(this.EXPIRY_DATE);
      const expirationDuration =
      new Date(expirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }else{
      this.removeTokens();
    }
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout().subscribe();
    }, expirationDuration);
  }
}
