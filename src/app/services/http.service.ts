import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

declare var $: any;

export interface Metodo {
  url: string,
  data?: object,
  header?: HttpHeaders,
  port?: number
}

@Injectable({
  providedIn: 'root'
})

export class HttpService {

constructor(public http: HttpClient) { }

get(method: Metodo): Observable<any> {
  if (!method.port) method.port = 8000;
  return this.http.get(`${method.url}`, {});
}

}
