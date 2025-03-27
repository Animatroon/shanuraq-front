import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ добавь это

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule, RouterModule],
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isOpen = false;
  hovering = false;

  constructor(private eRef: ElementRef) {}

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target) && !this.hovering) {
      this.isOpen = false;
    }
  }
}
