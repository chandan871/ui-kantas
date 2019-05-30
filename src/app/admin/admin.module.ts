import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { ApprovalComponent } from './approval/approval.component';
import { ManegmentComponent } from './manegment/manegment.component';
import { CandidatesinfoComponent } from './candidatesinfo/candidatesinfo.component';
import { InstitutionComponent } from './institution/institution.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [AdminDashboardComponent, AdminprofileComponent, ApprovalComponent, ManegmentComponent, CandidatesinfoComponent, 
    InstitutionComponent, ChangePasswordComponent, EditProfileComponent],
  imports: [
    CommonModule,
    NgxUiLoaderModule,
    AdminRoutingModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ]
})
export class AdminModule { }
