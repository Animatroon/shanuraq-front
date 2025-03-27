import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoleSwitchComponent } from '../shared/role-switch.component';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [CommonModule, FormsModule, RoleSwitchComponent, AuthLayoutComponent],
})
export class LoginComponent {
  login = '';
  password = '';
  role = 'Арендатор';
  loginError = '';

  constructor(private http: HttpClient, private router: Router) {}

  onRoleChange(role: string) {
    this.role = role;
  }

  onLogin() {
    const endpoint = this.role === 'Арендодатель'
      ? '/api/landlord/login'
      : '/api/tenant/login';

      this.http.post(endpoint, {
        login: this.login,
        password: this.password
      }, { withCredentials: true }) 
      .subscribe({
        next: () => {
          this.loginError = '';
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          this.loginError = err.error?.message || 'Ошибка входа';
        },
      });
      
  }
}
