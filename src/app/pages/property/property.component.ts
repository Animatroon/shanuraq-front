import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property',
  imports: [CommonModule],
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss'
})
export class PropertyComponent {
  property: any;

  mockData = [
    {
      id: '1',
      title: 'Уютная квартира в Алматы',
      image: '/assets/apart-1.jpg',
      owner: {
        name: 'Айбек',
        avatar: '/assets/user-icon.svg',
        verified: true
      },
      description: 'Уютная светлая квартира в центре города рядом с метро.',
      rating: 4.9,
      reviews: [
        { stars: 5, text: 'Очень понравилось, чисто и удобно!', anon: true },
        { stars: 4, text: 'Немного шумно вечером, но в целом класс.', anon: true }
      ]
    },
    {
      id: '2',
      title: 'Современный лофт в Астане',
      image: '/assets/apart-2.jpg',
      owner: {
        name: 'Жанна',
        avatar: '/assets/user-icon.svg',
        verified: true
      },
      description: 'Лофт-апартаменты для молодёжного отдыха.',
      rating: 4.7,
      reviews: [
        { stars: 5, text: 'Современно и удобно!', anon: true }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.property = this.mockData.find(p => p.id === id);
  }
}
