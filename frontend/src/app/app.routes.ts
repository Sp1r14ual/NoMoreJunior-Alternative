import { Routes } from '@angular/router';
import { MyProfileComponent } from './Profile/Profile.component';
import { TestsListComponent } from './Tests/Tests.component';
import { TasksComponent } from './Tasks/Tasks.component';

export const routes: Routes = [
  {
    path: '',
    component: MyProfileComponent,
    data: { title: 'Joan Smith', breadcrumb: 'Мой профиль' }
  },
  {
    path: 'tests',
    component: TestsListComponent,
    data: { title: 'Тесты', breadcrumb: 'Тесты > Junior Frontend' }
  },
  {
    path: 'tasks',
    component: TasksComponent,
    data: { title: 'Проектная деятельность', breadcrumb: 'Задания > Доска с заданиями' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];