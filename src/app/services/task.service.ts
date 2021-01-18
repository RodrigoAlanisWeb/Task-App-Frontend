import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private _http: HttpClient
  ) {
    this.api_url = 'https://ra-task-app-api.herokuapp.com/'
  }

  api_url: string;


  GetAll(token): Observable<any> {
    return this._http.get(this.api_url + 'api/tasks/',{
      headers: {
        'x-access-token': token
      }
    })
  }

  Create(values,token): Observable<any> {
    console.log(values,token);
    return this._http.post(this.api_url + 'api/tasks/',values , {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      }
    })
  }
}
