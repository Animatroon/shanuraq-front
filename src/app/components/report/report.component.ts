import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-report',
  imports: [CommonModule, FormsModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent {
  @Input() tenantsId!: string;

  showForm = false;
  complaintFor = 'Другое';
  comment = '';
  success = '';
  error = '';

  toggleForm() {
    this.showForm = !this.showForm;
    this.success = '';
    this.error = '';
  }

  async submitReport() {
    try {
      await axios.post(`http://localhost:4000/api/Landlords/${this.tenantsId}`, {
        complaintFor: this.complaintFor,
        comment: this.comment
      }, {
        withCredentials: true
      });

      this.success = 'Жалоба успешно отправлена';
      this.error = '';
      this.comment = '';
      this.complaintFor = 'Другое';
    } catch (err: any) {
      this.success = 'Жалоба отправлена';
      this.error = '';
    }
  }
}
