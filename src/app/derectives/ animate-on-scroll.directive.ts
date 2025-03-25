import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[animateOnScroll]',
})
export class AnimateOnScrollDirective implements OnInit {
  observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-soft');
          this.observer.unobserve(this.el.nativeElement);
        }
      },
      {
        threshold: 0.1,
      }
    );

    this.observer.observe(this.el.nativeElement);
  }
}
