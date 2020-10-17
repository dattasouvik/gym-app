import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private serverUrl: string = environment.serverApiUrl;
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
  private tokenCredentials: object = {
    "client_secret": "abc123",
    "grant_type": "password",
    "client_id": "e0aa8076-6c49-466a-b2a9-ad3276917d70",
    "scope": "gymadmin",
    "username": "cchowdh1",
    "password": "123456",

  }

  /**
  * Generates url
  **/
  getUrl(url: string): string {
    return this.serverUrl + url;
  }


  /**
  * Fetch request
  **/
  get(endpoint: string): Observable<any> {
    let url = this.getUrl(endpoint);
    return this.http.get(url, this.httpOptions);
  }

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
  /**
  * Post request
  **/
  post(endpoint: string, body: any): Observable<any> {
    let url = this.getUrl(endpoint);
    return this.http.post(url, body, this.httpOptions);
  }

  /**
  * Delete request
  **/
  delete(endpoint: string): Observable<{}> {
    let url = this.getUrl(endpoint);
    return this.http.delete(url, this.httpOptions);
  }

}
