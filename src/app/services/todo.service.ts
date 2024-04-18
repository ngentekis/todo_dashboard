import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url = 'http://127.0.0.1:8000/api/todo/'
  
  async getAllTodoItems(): Promise<Todo[]> {
    const data = await fetch(`${this.url}get-todo`);

    const response = await data.json();
    console.log(response);
    return response ? response : [];
  }

  // async getAllTodoItems(): Promise<Todo[]> {
  //   const todo = [
  //     { desc: "hello"}
  //   ];

  //   return todo;
  // }

  constructor() { }
}
