import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private readonly URL = 'assets/person.json';

  constructor(private http: HttpClient) { }

  getAddressData(): Observable<any> {
    return this.http.get<any>(this.URL);
  }

}
