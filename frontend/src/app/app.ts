import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './core/auth/auth.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  breadcrumb = signal('Joan Smith');
  authService = inject(AuthService);

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(() => {
      const data = this.getChildData(this.activatedRoute.snapshot.root);
      this.breadcrumb.set(data);
    });
  }

  private getChildData(route: any): string {
    if (route.firstChild) {
      return this.getChildData(route.firstChild);
    }
    return route.data['breadcrumb'] || 'Joan Smith';
  }

  logout(): void {
    this.authService.logout();
  }
}