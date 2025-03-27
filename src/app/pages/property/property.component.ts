import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportComponent } from '../../components/report/report.component';
import { ReviewComponent } from '../../components/review/review.component';

@Component({
  selector: 'app-property',
  imports: [CommonModule, ReportComponent, ReviewComponent],
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss'
})
export class PropertyComponent {
  property: any;
  tenantsId = '65f39591fdc4a0b857f76432'; 

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
    },
    {
      id: '3',
      title: 'Тихий домик у озера',
      image: '/assets/apart-3.jpg',
      owner: {
        name: 'Нурлан',
        avatar: '/assets/user-icon.svg',
        verified: false
      },
      description: 'Идеально для уединённого отдыха за городом.',
      rating: 4.8,
      reviews: [
        { stars: 5, text: 'Расслабляющее место, обязательно вернусь!', anon: true },
        { stars: 4, text: 'Красиво, но дорога была сложной.', anon: true }
      ]
    }
  ];
  

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.property = this.mockData.find(p => p.id === id);
  }
}
