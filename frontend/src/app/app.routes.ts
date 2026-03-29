import { Routes } from '@angular/router';
import { MyProfileComponent } from './Profile/Profile.component';
import { TestsListComponent } from './Tests/Tests.component';
import { TasksComponent } from './Tasks/Tasks.component';

export const routes: Routes = [
  {
    path: '',
    component: MyProfileComponent,
    data: { title: 'Joan Smith', breadcrumb: 'My Profile' }
  },
  {
    path: 'tests',
    component: TestsListComponent,
    data: { title: 'Tests', breadcrumb: 'Tests > Junior Frontend' }
  },
  {
    path: 'tasks',
    component: TasksComponent,
    data: { title: 'Project Tasks', breadcrumb: 'Tasks > Board' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];