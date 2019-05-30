import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService} from '../users.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import { timeout } from 'q';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  animal: string;
  name: string;
  currentUser: any;
  loggername: any;
  loggertype: any;

  constructor(public dialog: MatDialog, private toastr: ToastrService, private  router: Router) {
    if (localStorage.getItem('globalauth')) {
    this.currentUser = JSON.parse(localStorage.getItem('globalauth'));
    // if (this.currentUser !== null) {
    this.loggername = this.currentUser.UserResponseBean[0].UserName;
    this.loggertype = this.currentUser.UserResponseBean[3].UserType;
    console.log(this.loggertype);
    // }
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginModal, {
      width: '550px',
      hasBackdrop: false,
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
      this.name = result.UserResponseBean[0].UserName;
      console.log(this.name);

    });

  }
  regopenDialog(): void {
    const regdialogRef = this.dialog.open(RegistrationModel, {
      width: '550px',
      height: '666px',
      hasBackdrop: false,
      data: {name: this.name, animal: this.animal}
    });

    regdialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });

  }

  public logout(): void {
    this.toastr.success('You have been logged out successfully', 'Success');
    localStorage.clear();
    this.loggername = false;
    this.loggertype = false;
    this.router.navigateByUrl('');
  }

}
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login-modal',
  templateUrl: '../login/login.component.html',
  styleUrls: ['../login/login.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class LoginModal {
loginForm: FormGroup;
private successdata: any;
private UserName: string;

// public username: String = 'chandan';
  constructor(
    public dialogRef: MatDialogRef<LoginModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private loginservice: UsersService, private toastr: ToastrService, 
    private router: Router) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.loginForm = new FormGroup({
      Email: new FormControl('', Validators.required),
      Password: new FormControl('', [Validators.minLength(8), Validators.required])

    });
    console.log(this.loginForm.value);
  }


login( userdetails ) {
  console.log(userdetails);
  if ( userdetails.invalid === false) {
console.log(userdetails.value);
this.loginservice.loginUser(userdetails.value).subscribe((data) => {

  this.successdata = data;
  console.log(this.successdata);
  localStorage.setItem('globalauth', JSON.stringify(this.successdata));
  if (this.successdata.success === true) {
  this.UserName = this.successdata.UserResponseBean[0].UserName;
  console.log(this.UserName);
    this.toastr.success(this.successdata.statusMessage, 'Success');
    this.dialogRef.close(this.successdata);
    // setTimeout(function() { location.reload(); }, 300);

    if (this.successdata.UserResponseBean[3].UserType === 'Admin') {
      this.router.navigateByUrl('/admin');
      console.log('navagted');
    }
    setTimeout(function() { location.reload(); }, 300);
  }

},  (err: HttpErrorResponse) => {
  if (err.error instanceof Error) {
    console.log('error occured');
} else {
    console.log('Server side error');
    console.log(err);
    this.toastr.error(err.error, err.statusText);
}
});




  } else {
  return false;
  }
}



}

// can be deleted from here
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'register-modal',
  templateUrl: '../registration/registration.component.html',
  styleUrls: ['../registration/registration.component.css']
})

// tslint:disable-next-line:one-line
// tslint:disable-next-line:component-class-suffix
export class RegistrationModel {
  regform: FormGroup;
  languages: string[];
  private resdata: any;
  private Address: any;
  constructor(private registerservice: UsersService,  public regdialogRef: MatDialogRef<RegistrationModel>, private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.languages = ['Hindi', 'English', 'Tamil', 'Telugu'];
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.regform = new FormGroup({
      UserName: new FormControl('', Validators.required),
      Password: new FormControl('', [ Validators.minLength(8), Validators.required]),
      ConfirmPassword: new FormControl('', [Validators.minLength(8), Validators.required]),
      FirstName: new FormControl('', [Validators.minLength(2), Validators.maxLength(20), Validators.required]),
      LastName: new FormControl('', [Validators.minLength(2), Validators.maxLength(20), Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Gender: new FormControl('', [Validators.required]),
      Contact: new FormControl('', [Validators.required]),
      DOB: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      Languages: new FormControl('', [Validators.required])

    });

  }

 public registerUser(regdata): any {
console.log(regdata);
    // this.Address = delete regdata.value.street;

this.Address = {'street': regdata.value.street, 'city': regdata.value.city, 'country': regdata.value.country};

delete regdata.value.street;
delete regdata.value.city;
delete regdata.value.country;
regdata.value.Address = this.Address;
  console.log('deleted data', this.Address);
  console.log('chndan', regdata);
    this.registerservice.registerUser(regdata.value).subscribe((posre) => {
      this.resdata = posre;
      console.log(this.resdata);
      if (this.resdata.Success === 'true') {
        this.toastr.success(this.resdata.statusMessage, 'Success');
        this.regdialogRef.close();
      }
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('error occured');
    } else {
        console.log('Server side error');
        this.toastr.error(err.error, err.statusText);
    }
    });

  }

 public closeModsal(): void {
  this.regdialogRef.close();
 }

}
