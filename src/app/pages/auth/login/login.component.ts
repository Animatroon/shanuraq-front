import { Component } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoleSwitchComponent } from '../shared/role-switch.component';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';

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

  constructor(private router: Router) {}

  async onLogin() {
    const endpoint = this.role === 'Арендодатель'
      ? 'http://localhost:4000/api/Landlords/login'
      : 'http://localhost:4000/api/Tenants/login';

    try {
      const response = await axios.post(endpoint, {
        login: this.login,
        password: this.password
      }, {
        withCredentials: true
      });

      this.loginError = '';
      this.router.navigateByUrl('/');
    } catch (err: any) {
      this.loginError = err?.response?.data?.message || 'Ошибка входа';
    }
  }

  onRoleChange(role: string) {
    this.role = role;
  }
}
