import {
  Component,
  signal,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, KeyValuePipe, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, KeyValuePipe],
  templateUrl: './Profile.component.html',
  styleUrl: './Profile.component.css'
})
export class MyProfileComponent implements OnInit, OnDestroy {
  score = signal(10);
  points = signal(1176);
  maxPoints = signal(1200);

  dashoffset = signal(100);
  animateCircle = signal(false);

  skills = signal<Record<string, number>>({
    csharp: 91,
    js: 45,
    react: 70,
  });

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.resetAndAnimate();
  }

  ngOnDestroy() {
    this.animateCircle.set(false);
    this.dashoffset.set(100);
  }

  private resetAndAnimate() {
    this.animateCircle.set(false);
    this.dashoffset.set(100);

    // На сервере просто ставим итоговое состояние без анимации
    if (!this.isBrowser) {
      this.updateCircle();
      return;
    }

    // В браузере запускаем плавную анимацию
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.animateCircle.set(true);
        this.updateCircle();
      });
    });
  }

  private updateCircle() {
    const target = 100 - this.score();
    this.dashoffset.set(target);
  }

  randomizeSkills() {
    const rnd = () => Math.floor(20 + Math.random() * 80);

    this.skills.set({
      csharp: rnd(),
      js: rnd(),
      react: rnd(),
    });

    this.score.set(rnd());
    this.resetAndAnimate();
  }
}