import { Component } from '@angular/core';
import {Student} from '../../Student.interface'
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {
students:Student[]=[
  {id:1,name:'Eshika Rupani',feesStatus:'paid'},
   {id:2,name:'Eshika Rupani',feesStatus:'pending'},
    {id:3,name:'Eshika Rupani',feesStatus:'paid'},
     {id:3,name:'Eshika Rupani',feesStatus:'pending'}
]
goToParticularStudent(id:number){

}
}
