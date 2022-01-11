import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { AuthGuard } from './auth/auth.guard';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AdminUserComponent } from './admin-user/admin-user.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },

  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'customer',component:BoardUserComponent,canActivate:[AuthGuard]},
  {path:'admin',component:BoardAdminComponent,canActivate:[AuthGuard]},
  {path:'superAdmin',component:AdminUserComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
