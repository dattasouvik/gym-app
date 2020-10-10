import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  private serverUrl:string = environment.serverApiUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  /**
  * Generates url
  **/
  getUrl(url: string ):string{
    return this.serverUrl + url;
  }

  /**
  * Fetch request
  **/
  get(endpoint: string ):Observable<any>{
    let url = this.getUrl(endpoint);
    return this.http.get(url,this.httpOptions);
  }

  /**
  * Post request
  **/
  post(endpoint: string , body: any ):Observable<any>{
    let url = this.getUrl(endpoint);
    return this.http.post(url, body,this.httpOptions);
  }

  /**
  * Delete request
  **/
  delete(endpoint: string):Observable<{}>{
    let url = this.getUrl(endpoint);
    return this.http.delete(url, this.httpOptions);
  }

}
