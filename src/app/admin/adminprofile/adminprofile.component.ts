import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {
  adminprofile: any;
  constructor() { }

  ngOnInit() {
    this.adminprofile = JSON.parse(localStorage.getItem('globalauth'));
    console.log(this.adminprofile);
   // this.loggertype = this.adminprofile.UserResponseBean[3].UserType;
  }

}
