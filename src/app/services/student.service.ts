import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  isAdminLoggedIn: boolean = false;
  constructor() { }
  ngOnInit() {
    this.fetchStudents();
  }
  students = {
    sem1: {
      semStudents: [{ id: 1, name: 'Eshika Rupani', email: 'eshika@gmail.com', ph: 9876543210, guardianPh: 9876543210, subjectsTaken: [1, 2] }
      ],
      semSubjects: [{
        id: 1, subName: 'Maths', subFees: 10000
      }, {
        id: 2, subName: 'Mechanics', subFees: 10000
      },
      {
        id: 3, subName: 'BEE', subFees: 10000
      }
      ]
    },
    sem2: {
      semStudents: [{ id: 1, name: 'Twinkle Wadhwa', email: 'twinkle@gmail.com', ph: 9876543210, guardianPh: 9876543210, subjectsTaken: [1, 3] }
      ],
      semSubjects: [{
        id: 1, subName: 'Maths', subFees: 10000
      }, {
        id: 2, subName: 'EG', subFees: 10000
      },
      {
        id: 3, subName: 'C Programming', subFees: 10000
      }
      ]
    },
    sem3: {
      semStudents: [{ id: 1, name: 'Chirag Santoshi', email: 'chirag@gmail.com', ph: 9876543210, guardianPh: 9876543210, subjectsTaken: [1, 2, 3] }
      ],
      semSubjects: [{
        id: 1, subName: 'Maths', subFees: 10000
      }, {
        id: 2, subName: 'DSA', subFees: 10000
      },
      {
        id: 3, subName: 'DSGT', subFees: 10000
      }
      ]
    },
    sem4: {
      semStudents: [{ id: 1, name: 'Eshika Rupani', email: 'eshika@gmail.com', ph: 9876543210, guardianPh: 9876543210, subjectsTaken: [1, 2, 3] }
      ],
      semSubjects: [{
        id: 1, subName: 'Maths', subFees: 10000
      }, {
        id: 2, subName: 'AOA', subFees: 10000
      },
      {
        id: 3, subName: 'MP', subFees: 10000
      }
      ]
    },
    sem5: {
      semStudents: [{ id: 1, name: 'Twinkle Wadhwa', email: 'twinkle@gmail.com', ph: 9876543210, guardianPh: 9876543210, subjectsTaken: [1, 2] }
      ],
      semSubjects: [{
        id: 1, subName: 'CP', subFees: 10000
      }, {
        id: 2, subName: 'Backend', subFees: 10000
      },
      {
        id: 3, subName: 'IP', subFees: 10000
      }
      ]
    },
    sem6: {
      semStudents: [{ id: 1, name: 'Chirag Santoshi', email: 'chirag@gmail.com', ph: 9876543210, guardianPh: 9876543210, subjectsTaken: [1, 3] }
      ],
      semSubjects: [{
        id: 1, subName: 'Maths', subFees: 10000
      }, {
        id: 2, subName: 'EG', subFees: 10000
      },
      {
        id: 3, subName: 'C Programming', subFees: 10000
      }
      ]
    },
    sem7: {
      semStudents: [{ id: 1, name: 'Twinkle Wadhwa', email: 'twinkle@gmail.com', ph: 9876543210, guardianPh: 9876543210, subjectsTaken: [1, 3] }
      ],
      semSubjects: [{
        id: 1, subName: 'Maths', subFees: 10000
      }, {
        id: 2, subName: 'EG', subFees: 10000
      },
      {
        id: 3, subName: 'C Programming', subFees: 10000
      }
      ]
    },
    sem8: {
      semStudents: [{ id: 1, name: 'Twinkle Wadhwa', email: 'twinkle@gmail.com', ph: 9876543210, guardianPh: 9876543210, subjectsTaken: [1, 3] }
      ],
      semSubjects: [{
        id: 1, subName: 'Maths', subFees: 10000
      }, {
        id: 2, subName: 'EG', subFees: 10000
      },
      {
        id: 3, subName: 'C Programming', subFees: 10000
      }
      ]
    }
  }
  fetchStudents() {
    let tempStudent = localStorage.getItem('students')
    if (tempStudent)
      this.students = JSON.parse(tempStudent)
  }
  addStudent(sem: number, student: any) {
    switch (sem) {
      case 1: this.students.sem1.semStudents.push(student);
        break;
      case 2: this.students.sem2.semStudents.push(student);
        break;
      case 3: this.students.sem3.semStudents.push(student);
        break;
      case 4: this.students.sem4.semStudents.push(student);
        break;
      case 5: this.students.sem5.semStudents.push(student);
        break;
      case 6: this.students.sem6.semStudents.push(student);
        break;
      case 7: this.students.sem7.semStudents.push(student);
        break;
      case 8: this.students.sem8.semStudents.push(student);
        break;
    }
    console.log(this.students)
    // localStorage.setItem('students',JSON.stringify(this.students))
  }
  deleteStudent(sem: number, studentId: any) {
    switch (sem) {
      case 1: this.students.sem1.semStudents.splice(this.students.sem1.semStudents.findIndex((elem: any) => elem.id == studentId), 1);
        break;
      case 2: this.students.sem2.semStudents.splice(this.students.sem1.semStudents.findIndex((elem: any) => elem.id == studentId), 1);
        break;
      case 3: this.students.sem3.semStudents.splice(this.students.sem1.semStudents.findIndex((elem: any) => elem.id == studentId), 1);
        break;
      case 4: this.students.sem4.semStudents.splice(this.students.sem1.semStudents.findIndex((elem: any) => elem.id == studentId), 1);
        break;
      case 5: this.students.sem5.semStudents.splice(this.students.sem1.semStudents.findIndex((elem: any) => elem.id == studentId), 1);
        break;
      case 6: this.students.sem6.semStudents.splice(this.students.sem1.semStudents.findIndex((elem: any) => elem.id == studentId), 1);
        break;
      case 7: this.students.sem7.semStudents.splice(this.students.sem1.semStudents.findIndex((elem: any) => elem.id == studentId), 1);
        break;
      case 8: this.students.sem8.semStudents.splice(this.students.sem1.semStudents.findIndex((elem: any) => elem.id == studentId), 1);
        break;
    }
    console.log(this.students)
    // localStorage.setItem('students',JSON.stringify(this.students))
  }
  updateStudent(sem: number, student: any) {

  }

}
