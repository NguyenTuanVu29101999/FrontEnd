import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  readonly authURL:string = 'https://localhost:44350/api/authenticate/';

  readonly apiUser:string = 'https://localhost:44350/weatherforecast/';



  login(formData:any) {
    return this.http.post(this.authURL + 'Login', formData);
  }

  getUserProfile() {
    return this.http.get(this.apiUser + 'weather');
  }

}



