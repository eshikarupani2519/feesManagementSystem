import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  selectedSem: number | null = null;

  allSubjects: any = {
    1: [{ name: 'Maths I', fees: 1000 }, { name: 'Physics', fees: 1200 }, { name: 'C Programming', fees: 1100 }],
    2: [{ name: 'Maths II', fees: 1000 }, { name: 'Chemistry', fees: 1200 }, { name: 'Mechanics', fees: 1100 }],
    3: [{ name: 'DSA', fees: 1000 }, { name: 'DBMS', fees: 1200 }, { name: 'Java', fees: 1100 }],
    4: [{ name: 'AT', fees: 1000 }, { name: 'CNND', fees: 1200 }, { name: 'Python', fees: 1100 }],
    5: [{ name: 'ADSA', fees: 1500 }, { name: 'CNS', fees: 1300 }, { name: 'SE', fees: 1400 }],
    6: [{ name: 'DSA', fees: 1000 }, { name: 'Physics', fees: 1200 }, { name: 'C Programming', fees: 1100 }],
    7: [{ name: 'ADSA', fees: 1000 }, { name: 'Physics', fees: 1200 }, { name: 'C Programming', fees: 1100 }],
    8: [{ name: 'Maths I', fees: 1000 }, { name: 'Physics', fees: 1200 }, { name: 'C Programming', fees: 1100 }]
  };

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        contact: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        role: ['', Validators.required],
        sem: [''],
        subjects: this.fb.array([])
      },
      { validators: passwordMatchValidator }
    );

    this.registerForm.get('role')?.valueChanges.subscribe(role => {
      if (role === 'admin') {
        this.registerForm.get('sem')?.reset();
        this.subjectsFormArray.clear();
      }
    });
  }

  get isStudent() {
    return this.registerForm.get('role')?.value === 'student';
  }

  get subjectsFormArray() {
    return this.registerForm.get('subjects') as FormArray;
  }

  onSemChange(event: any) {
    this.selectedSem = parseInt(event.target.value);
    const selectedSubjects = this.allSubjects[this.selectedSem] || [];
    this.subjectsFormArray.clear();

    selectedSubjects.forEach((sub: { name: string; fees: number }) => {
      this.subjectsFormArray.push(
        this.fb.group({
          name: [sub.name],
          fees: [sub.fees],
          selected: [false]
        })
      );
    });
  }

  onRegister() {
    if (this.registerForm.invalid) return;

    const selectedSubjects = this.subjectsFormArray.value.filter((s: any) => s.selected);
    const user = { ...this.registerForm.value, subjects: this.isStudent ? selectedSubjects : [] };

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const alreadyExists = users.some((u: any) => u.email === user.email);

    if (alreadyExists) {
      this.registerForm.setErrors({ emailExists: true });
      return;
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    this.router.navigate(['/login']);
  }
}
