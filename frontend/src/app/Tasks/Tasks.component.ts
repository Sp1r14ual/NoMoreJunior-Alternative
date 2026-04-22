import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Tasks.component.html',
  styleUrl: './Tasks.component.css'
})
export class TasksComponent {
  // Используем Signal для управления списком задач
  tasks = signal([
    { id: 1, title: 'Исправить ошибку с круговой диаграммой', status: 'В процессе', priority: 'Высокий' },
    { id: 2, title: 'Добавить подразделы в app.html', status: 'Готово', priority: 'Средний' },
    { id: 3, title: 'Отрефакторить структуру проекта', status: 'Ожидает', priority: 'Низкий' },
    { id: 4, title: 'Создать компонент с задачами', status: 'Готово', priority: 'Высокий' }
  ]);

  // Метод для переключения статуса (простая работоспособность)
  toggleStatus(id: number) {
    this.tasks.update(currentTasks => 
      currentTasks.map(task => 
        task.id === id 
          ? { ...task, status: task.status === 'Готово' ? 'Ожидает' : 'Готово' } 
          : task
      )
    );
  }
}