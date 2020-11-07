import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private serverUrl: string = environment.serverApiUrl;

  /**
  * Generates url
  **/
  getUrl(url: string): string {
    return this.serverUrl + url;
  }


  /**
  * Fetch request
  **/
  get<T>(endpoint: string, options?: IRequestOptions): Observable<any> {
    let url = this.getUrl(endpoint);
    return this.http.get(url,options);
  }


  /**
  * Post request
  **/
  post<T>(endpoint: string, body: any,  options?: IRequestOptions): Observable<any> {
    let url = this.getUrl(endpoint);
    return this.http.post(url, body, options);
  }

  /**
  * Delete request
  **/
  delete<T>(endpoint: string, options?: IRequestOptions): Observable<{}> {
    let url = this.getUrl(endpoint);
    return this.http.delete(url,options);
  }

}
