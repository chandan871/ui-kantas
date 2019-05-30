import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {IndexComponent} from '../app/index/index.component';
import {LoginComponent} from '../app/login/login.component';

/* const routes: Routes = [{path: '', component: IndexComponent},
{path: '', component: HomeComponent,
children: [{path: 'login', component: LoginComponent}]}
]; */
const routes: Routes = [
{path: '', component: IndexComponent},
{path: '', redirectTo: 'login', pathMatch: 'full'},
{path: '', component: HomeComponent},
{path: 'login', component: LoginComponent},
{path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
