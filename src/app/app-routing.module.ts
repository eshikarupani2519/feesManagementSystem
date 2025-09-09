import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './admin/student-dashboard/student-dashboard.component';
import { SingleStudentComponent } from './admin/single-student/single-student.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AdminComponent } from './admin/admin/admin.component';
import { SubjectsComponent } from './admin/subjects/subjects.component';
import { HomeComponent } from './admin/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path:'sem/:id',component:StudentDashboardComponent},
  {path:'single-student',component:SingleStudentComponent},
  {path:'student-dashboard',component:StudentDashboardComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'admin',component:AdminComponent},
  {path:'subjects/:id',component:SubjectsComponent},
  {path:'home',component:HomeComponent},
  {path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent },
  {path:'', redirectTo:'register', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
