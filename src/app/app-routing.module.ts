import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemDashboardComponent } from './admin/sem-dashboard/sem-dashboard.component';
import { StudentDashboardComponent } from './admin/student-dashboard/student-dashboard.component';

const routes: Routes = [
  {path:'semDashboard',component:SemDashboardComponent},
   {path:'sem/:id',component:StudentDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
