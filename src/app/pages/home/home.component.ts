import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { AnimateOnScrollDirective } from '../../derectives/ animate-on-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  apartments = [
    {
      image: '/assets/apts/apt1.jpg',
      title: 'Уютная квартира в Алматы',
      rating: 4.91
    },
    {
      image: '/assets/apts/apt2.jpg',
      title: 'Квартира возле Арбата',
      rating: 4.85
    },
    {
      image: '/assets/apts/apt3.jpg',
      title: 'Апартаменты с видом на горы',
      rating: 5.0
    },
    // ...
  ];
}


