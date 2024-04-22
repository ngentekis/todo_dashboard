import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Config } from '../../../config/config';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  config: Config = require('../../../config/config.json');
  url = this.config.apiUri;
  
  async getAllTodoItems(): Promise<Todo[]> {
    const data = await fetch(`${this.url}/get-todo`);

    const response = await data.json();

    return response ? response : [];
  }

  async addTodoItem(td_desc: String): Promise<void> {
    let data = { td_desc: td_desc };

    const response = await fetch(`${this.url}/add-todo`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)    
    });

    console.log(response.status);

  }

  constructor() { }
}
