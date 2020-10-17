import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
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

  getLogin(endpoint: string, credentials: any): Observable<any> {
    let url = endpoint;
    let body = {
      "name": credentials.username,
      "pass": credentials.password
    }

    return this.http.post(url, body, this.httpOptions);
  }

  getToken(endpoint: string,credentials:any): Observable<any> {
    console.log(credentials);
    let body=`username=${credentials.username}&password=${credentials.password}&client_secret=abc123&grant_type=password&client_id=e0aa8076-6c49-466a-b2a9-ad3276917d70&scope=gymadmin`
    let url = endpoint;
    
    return this.http.post(url, body, this.httpOptions_1);
  }
}
