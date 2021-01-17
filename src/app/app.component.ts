import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Task-App-Frontend';

  VerifySession(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  LogOut() {
    localStorage.removeItem('token')
    window.location.href = '/auth'
  }
}

