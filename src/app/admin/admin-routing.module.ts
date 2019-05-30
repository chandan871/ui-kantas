import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { InstitutionComponent } from './institution/institution.component';
import { CandidatesinfoComponent } from './candidatesinfo/candidatesinfo.component';
import { ApprovalComponent } from './approval/approval.component';
import { ManegmentComponent } from './manegment/manegment.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [{
  path: '',
  component: AdminDashboardComponent,
  children: [{path: 'institution', component: InstitutionComponent},
  {path: 'candidates', component: CandidatesinfoComponent},
  {path: 'approval', component: ApprovalComponent},
  {path: 'manegment', component: ManegmentComponent},
  {path: 'profile', component: AdminprofileComponent},
  {path: 'changepassword', component: ChangePasswordComponent},
  {path: 'editadminprofile', component: EditProfileComponent}]
}/* ,
{
  path: 'institution', component: InstitutionComponent
} */];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
