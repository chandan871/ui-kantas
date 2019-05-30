import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { IndexComponent } from './index/index.component';
import {MatDialogModule} from '@angular/material/dialog';
import {LoginModal} from '../app/home/home.component';
import {RegistrationModel} from '../app/home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersService } from '../app/users.service';
import { NgxUiLoaderModule } from 'ngx-ui-loader';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    IndexComponent,
    LoginModal,
    RegistrationModel,
    RegistrationComponent
  ],
  entryComponents: [HomeComponent, LoginModal, RegistrationModel],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ToastrModule.forRoot({timeOut: 10000, positionClass: 'toast-top-center', preventDuplicates: true}),
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    AppRoutingModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule,
    NgxUiLoaderModule
  ],
  /* declarations: [HomeComponent, LoginModal], */
  providers: [UsersService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
