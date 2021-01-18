import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private _builder: FormBuilder,
    private _task: TaskService
  ) { 
    this.create_form= this._builder.group({
      name: ['',Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    let token = localStorage.getItem('token');

    this._task.GetAll(token).subscribe(res => {
      if (res) {
        this.tasks = res.tasks
      }
    })
  }

  create_form: FormGroup
  tasks

  Create(values) {
    console.log(values);
    let token = localStorage.getItem('token');
    console.log(token);
    this._task.Create(values,token).subscribe(res => {
      console.log(res);
    })

    this._task.GetAll(token).subscribe(res => {
      if (res) {
        this.tasks = res.tasks
      }
    })
  }

  VerifySession(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      window.location.href = 'auth'
    }
  }

}
