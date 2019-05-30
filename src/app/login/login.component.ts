import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      uname: new FormControl('admin', Validators.minLength(4)),
      upwd: new FormControl('admin', Validators.minLength(8))

    });
    console.log(this.loginForm.value);
  }

}
