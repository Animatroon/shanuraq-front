import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-review',
  imports: [CommonModule, FormsModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',
})
export class ReviewComponent implements OnInit {
  @Input() tenantsId!: string;

  rating = 0;
  comment = '';
  reviews: any[] = [];
  error = '';
  success = '';

  async ngOnInit() {
    this.loadReviews();
  }

  async loadReviews() {
    try {
      const res = await axios.get(`http://localhost:4000/api/Landlords/${this.tenantsId}`);
      this.reviews = res.data.reviews || [];
    } catch (e) {
      this.reviews = [];
    }
  }

  setRating(star: number) {
    this.rating = star;
  }

  async submitReview() {
    try {
      await axios.post(`http://localhost:4000/api/Landlords/${this.tenantsId}`, {
        rating: this.rating,
        comment: this.comment,
      }, {
        withCredentials: true,
      });

      this.success = 'Спасибо за отзыв!';
      this.error = '';
      this.rating = 0;
      this.comment = '';
      await this.loadReviews();
    } catch (err: any) {
      this.error = err?.response?.data?.message || 'Ошибка при отправке';
      this.success = '';
    }
  }
}
