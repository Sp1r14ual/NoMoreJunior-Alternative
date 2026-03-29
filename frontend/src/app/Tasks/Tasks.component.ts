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
    { id: 1, title: 'Fix circular chart bug', status: 'In Progress', priority: 'High' },
    { id: 2, title: 'Add breadcrumbs to app.html', status: 'Done', priority: 'Medium' },
    { id: 3, title: 'Refactor folder structure', status: 'To Do', priority: 'Low' },
    { id: 4, title: 'Create Tasks component', status: 'Done', priority: 'High' }
  ]);

  // Метод для переключения статуса (простая работоспособность)
  toggleStatus(id: number) {
    this.tasks.update(currentTasks => 
      currentTasks.map(task => 
        task.id === id 
          ? { ...task, status: task.status === 'Done' ? 'To Do' : 'Done' } 
          : task
      )
    );
  }
}