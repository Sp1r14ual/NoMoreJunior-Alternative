import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TestItem {
  title: string;
  description: string;
  time: string;
  questions: number;
  score?: string;
  passedAt?: string;
}

@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Tests.component.html',
  styleUrl: './Tests.component.css'
})
export class TestsListComponent {
  availableTests: TestItem[] = [
    {
      title: 'HTML Basics',
      description: 'Основы HTML: структура страницы, теги, формы.',
      time: '15 мин',
      questions: 12
    },
    {
      title: 'CSS Fundamentals',
      description: 'Селекторы, box model, flexbox, позиционирование.',
      time: '20 мин',
      questions: 15
    },
    {
      title: 'JavaScript Starter',
      description: 'Переменные, функции, условия, массивы.',
      time: '25 мин',
      questions: 18
    }
  ];

  passedTests: TestItem[] = [
    {
      title: 'Angular Intro',
      description: 'Базовые понятия Angular и структура приложения.',
      time: '18 мин',
      questions: 10,
      score: '8/10',
      passedAt: '20.03.2026'
    },
    {
      title: 'TypeScript Basics',
      description: 'Типы, интерфейсы, классы и работа с данными.',
      time: '17 мин',
      questions: 10,
      score: '9/10',
      passedAt: '19.03.2026'
    }
  ];
}