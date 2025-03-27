import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  apartments = [
    {
      id: 1,
      title: '2-комнатная в центре',
      rating: 4.8,
      image: 'assets/apart-1.jpg',
    },
    {
      id: 2,
      title: 'Уютная студия у метро',
      rating: 4.5,
      image: 'assets/apart-2.jpg',
    },
    {
      id: 3,
      title: 'С видом на горы',
      rating: 4.9,
      image: 'assets/apart-3.jpg',
    }
  ];

  goToProperty(id: number) {
    this.router.navigate(['/property', id]);
  }
}
