import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) return;

    const { email, password, role } = this.loginForm.value;
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const foundUser = users.find(
      (u: any) => u.email === email && u.password === password && u.role === role
    );

    if (foundUser) {
      localStorage.setItem('currentUser', JSON.stringify(foundUser));

      if (foundUser.role === 'student') {
        this.router.navigate(['/semDashboard']);
      } else if (foundUser.role === 'admin') {
        this.router.navigate(['/admin-dashboard']);
      }
    } else {
      this.loginForm.setErrors({ invalidCredentials: true });
    }
  }
}