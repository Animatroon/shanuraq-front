import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
    title: 'Home'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.component').then(c => c.LoginComponent),
    title: 'Login'
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/auth/register/register.component').then(c => c.RegisterComponent),
    title: 'Register'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent),
    title: 'О нас'
  },  
  {
    path: 'property/:id',
    loadComponent: () => import('./pages/property/property.component').then(c => c.PropertyComponent),
    title: 'Квартира'
  },  
  {
    path: '**',
    redirectTo: ''
  }
];
