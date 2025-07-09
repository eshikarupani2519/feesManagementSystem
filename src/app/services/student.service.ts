import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  // studentsOfSem1:Student[]=[]
  students:any[]=[
    {sem:1,studentsOfSem:[]},{sem:1,studentsOfSem:[]},{sem:1,studentsOfSem:[]},{sem:1,studentsOfSem:[]},{sem:1,studentsOfSem:[]},{sem:1,studentsOfSem:[]},{sem:1,studentsOfSem:[]},{sem:1,studentsOfSem:[]}
  ]
  
}
