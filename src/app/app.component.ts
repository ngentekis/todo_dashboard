import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TodoContainer } from './components/todo-container/todo-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    TodoContainer
  ],
  template: `
  <main>
    <a [routerLink]="['/']">
    <header class="todo-header">
      <img class="todo-logo" src = "/assets/logo.svg" alt="logo" aria-hidden="true">      
    </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-dashboard';
}
