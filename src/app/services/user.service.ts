import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient 
  ) { 
    this.api_url = 'https://ra-task-app-api.herokuapp.com/'
  }

  api_url: string;

  SignUp (values): Observable<any> {
    return this._http.post(this.api_url + 'api/auth/singup', values , {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  LogIn (values): Observable<any> {
    return this._http.post(this.api_url + 'api/auth/login',values , {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
}
