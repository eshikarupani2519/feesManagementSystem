import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { SingleStudentComponent } from './single-student/single-student.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    StudentDashboardComponent,
    SingleStudentComponent,
    SidebarComponent,
    AdminComponent,
    SubjectsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
