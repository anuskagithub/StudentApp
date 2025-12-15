import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login(): void {
    this.auth.login({
      userName: this.username,
      password: this.password
    }).subscribe({
      next: (res: { token: string }) => {
        this.auth.saveToken(res.token);
        this.router.navigate(['/students']);
      },
      error: () => alert('Invalid credentials')
    });
  }

  register(): void {
  this.auth.register({
    userName: this.username,
    password: this.password
  }).subscribe({
    next: () => {
      alert('Registered successfully');
    },
    error: (err) => {
      console.error(err.error);

      // ASP.NET Identity returns an array of errors
      if (Array.isArray(err.error) && err.error.length > 0) {
        const errorCode = err.error[0].code;

        if (errorCode === 'DuplicateUserName') {
          alert('User already registered');
        } else {
          alert(err.error[0].description);
        }
      } else {
        alert('Registration failed');
      }
    }
  });
}

}
