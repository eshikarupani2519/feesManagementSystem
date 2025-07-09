import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sem-dashboard',
  templateUrl: './sem-dashboard.component.html',
  styleUrls: ['./sem-dashboard.component.css']
})
export class SemDashboardComponent {
sems=[1,2,3,4,5,6,7,8];
constructor(private router:Router){}
goToStudentDashboard(sem:number){
this.router.navigate(['sem',sem]);
}
}
