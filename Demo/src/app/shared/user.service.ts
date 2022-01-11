import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // readonly authURL:string = 'https://localhost:44350/api/authenticate/';

  readonly API_URL:string = 'https://localhost:44350/weatherforecast/';

  // login(formData:any): Observable<any> {
  //   return this.http.post(this.authURL + 'Login', formData);
  // }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'admin', { responseType: 'text' });
  }

  getUserBoard(): Observable<any>{
    return this.http.get(this.API_URL + 'customer', { responseType: 'text' });
  }




}
