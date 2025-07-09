import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Basic empty-field check
    if (!this.email || !this.password) {
      alert('Please enter both email and password.');
      return;
    }

    // Dummy credential check (replace later with real service)
    if (this.email === 'test@example.com' && this.password === '123456') {
      alert('Login successful!');
      console.log('Email:', this.email);
      console.log('Password:', this.password);

      // Navigate to home/dashboard if needed
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials!');
    }
  }
}
