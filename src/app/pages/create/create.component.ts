import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  imports: [CommonModule, FormsModule]
})
export class CreateComponent {
  city = '';
  adress = '';
  roomCount!: number;
  meterSquare!: number;
  floor!: number;
  price!: number;
  description = '';
  type = 'apartment'; 
  rentals = 'monthly'; 
  images: File[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.images = Array.from(input.files || []);
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('city', this.city);
    formData.append('adress', this.adress);
    formData.append('roomCount', this.roomCount.toString());
    formData.append('meterSquare', this.meterSquare.toString());
    formData.append('floor', this.floor.toString());
    formData.append('price', this.price.toString());
    formData.append('description', this.description);
    formData.append('type', this.type);
    formData.append('rentals', this.rentals);

    this.images.forEach(file => {
      formData.append('images', file);
    });

    this.http.post('http://46.101.172.145:4000/api/house', formData, { withCredentials: true }).subscribe({
      next: () => {
        alert('Квартира добавлена!');
        this.router.navigateByUrl('/');
      },
      error: err => {
        alert(err.error?.message || 'Ошибка при создании квартиры');
      }
    });
  }
}
