import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private _builder: FormBuilder,
    private _user: UserService
  ) { 
    this.register_form = this._builder.group({
      name: ['', Validators.required],
      username: ['',Validators.required],
      email: ['',Validators.compose([Validators.email,Validators.required])],
      password: ['',Validators.required],
    });

    this.login_form = this._builder.group({
      email: ['',Validators.compose([Validators.email,Validators.required])],
      password: ['',Validators.required],
    });
    this.error = "NONE"
  }

  ngOnInit(): void {
  }

  register_form: FormGroup;
  login_form: FormGroup;
  error: string;

  Register(values) {
     this._user.SignUp(values).subscribe(res => {
       if (res.res) {
         localStorage.setItem('token',res.token)
         console.log(localStorage.getItem('token'));
       } else {
         this.error = 'ERROR'
       }
     })
  }

  Login(values) {
    this._user.LogIn(values).subscribe(res => {
      if (res.auth) {
        localStorage.setItem('token',res.token)
        console.log(localStorage.getItem('token'));
        window.location.href = '/'
      } else {
        this.error = 'ERROR'
      }
    })
  }

}
