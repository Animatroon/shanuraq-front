import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-switch',
  templateUrl: './role-switch.component.html',
  styleUrl: './role-switch.component.scss',
  imports: [CommonModule]
})
export class RoleSwitchComponent implements OnInit {
  roles = ['Арендатор', 'Арендодатель'];
  selected = 'Арендатор';

  @Output() roleChange = new EventEmitter<string>();

  ngOnInit() {
    const saved = localStorage.getItem('userRole');
    if (saved && this.roles.includes(saved)) {
      this.selected = saved;
    }
    this.roleChange.emit(this.selected);
  }

  switch(role: string) {
    this.selected = role;
    localStorage.setItem('userRole', role);
    this.roleChange.emit(role);
  }
}
