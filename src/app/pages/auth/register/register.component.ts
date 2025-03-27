import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoleSwitchComponent } from '../shared/role-switch.component';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  imports: [CommonModule, FormsModule, RoleSwitchComponent, AuthLayoutComponent],
})
export class RegisterComponent {
  email = '';
  phone = '';
  password = '';
  certPassword = '';
  selectedFile: File | null = null;
  role = 'Арендатор';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  onRoleChange(role: string) {
    this.role = role;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0] || null;
  }

  onSubmit() {
    if (!this.selectedFile) {
      this.errorMessage = 'Загрузите ЭЦП-файл';
      return;
    }
  
    const formData = new FormData();
    formData.append('email', this.email);
    formData.append('phone', this.phone);
    formData.append('password', this.password);
    formData.append('file', this.selectedFile);
    formData.append('passwordForbuffer', this.certPassword);
  
    const endpoint = this.role === 'Арендодатель'
      ? '/api/landlord/register'
      : '/api/tenant/register';
  
    this.http.post(endpoint, formData).subscribe({
      next: () => {
        alert('Успешная регистрация');
        this.router.navigateByUrl('/login');
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Ошибка регистрации';
      },
    });
  }  
}
