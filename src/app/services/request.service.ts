import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private url: string;
  constructor(public _http: HttpClient) {
    this.url = "/status";
  }
  getStatus():Observable<any>{
    return this._http.get(this.url);
  }

}
