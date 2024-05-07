import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Config } from '../../../config/config';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private config: Config = require('../../../config/config.json');
  private url = this.config.apiUri;
  public items: Todo[] = [];
  
  async getAllTodoItems(): Promise<Todo[]> {
    const data = await fetch(`${this.url}/get-todo`);

    const response = await data.json();

    this.items = response ? response : this.items;

    return response
  }

  async addTodoItem(td_desc: String): Promise<void> {
    let data = { td_desc: td_desc };

    const response = await fetch(`${this.url}/add-todo`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",        
      },
      body: JSON.stringify(data)
    });

    console.log(response.status);

  }

  constructor() { }
}
