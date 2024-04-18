import { Routes } from '@angular/router';
import { TodoContainer } from './components/todo-container/todo-container.component';

const routeConfig: Routes = [
    {
      path: '',
      component: TodoContainer,
      title: 'Home page'
    }
  ];
  
export default routeConfig;