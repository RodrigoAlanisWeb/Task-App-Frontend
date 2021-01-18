import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Task-App-Frontend';

  constructor(
    private _user: UserService
  ){
    this.getUser()
  }

  ngOnInit() {
  }

  VerifySession(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  public user

  LogOut() {
    localStorage.removeItem('token')
    window.location.href = '/auth'
  }

  getUser() {
    if (this.VerifySession()) {
      let token = localStorage.getItem('token')
      this._user.Profile(token).subscribe(res => {
        this.user = res.data
      })
    }
  }
}

