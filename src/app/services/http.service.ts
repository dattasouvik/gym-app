  /**
  * Extends Angular HttpClient
  * @Ref: https://medium.com/@admin_87321/extending-angular-httpclient-6b33a7a1a4d0
  **/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
   * GET request
   * @param {string} endPoint it doesn't need / in front of the end point
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  get<T>(endpoint: string, options?: IRequestOptions): Observable<any> {
    let url = this.getUrl(endpoint);
    return this.http.get<T>(url,options);
  }


  /**
   * POST request
   * @param {string} endPoint end point of the api
   * @param {Object} body body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  post<T>(endpoint: string, body: any,  options?: IRequestOptions): Observable<any> {
    let url = this.getUrl(endpoint);
    return this.http.post<T>(url, body, options);
  }

  /**
   * PUT request
   * @param {string} endPoint end point of the api
   * @param {Object} body body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public put<T>(endpoint: string, body: Object, options?: IRequestOptions): Observable<T> {
    let url = this.getUrl(endpoint);
    return this.http.put<T>(url, body, options);
  }

  /**
   * DELETE request
   * @param {string} endPoint end point of the api
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  delete<T>(endpoint: string, options?: IRequestOptions): Observable<T> {
    let url = this.getUrl(endpoint);
    return this.http.delete<T>(url,options);
  }

}
