import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemDashboardComponent } from './sem-dashboard/sem-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { SingleStudentComponent } from './single-student/single-student.component';



@NgModule({
  declarations: [
    SemDashboardComponent,
    StudentDashboardComponent,
    SingleStudentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
