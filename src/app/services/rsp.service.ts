import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RspService {

  private readonly URL = 'assets/rsp1.json';

  constructor(private http: HttpClient) { }

  getRspData(): Observable<any> {
    return this.http.get<any>(this.URL);
  }
}
