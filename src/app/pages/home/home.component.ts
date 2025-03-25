import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../derectives/ animate-on-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}

