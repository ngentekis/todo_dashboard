import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { AddTodoContainer } from "../add-todo/add-todo.component";
import { Todo } from "../../models/todo";
import { TodoService } from "../../services/todo.service";

@Component({
    selector: 'todo-container',
    standalone: true,
    imports: [
        CommonModule,    
        AddTodoContainer
    ],
    template: `
    <section>
        <add-todo></add-todo>        
    </section>    
    <section>
        <p
        *ngFor="let todoItem of todoList"
        
        >{{todoItem.desc}}</p>
    </section>
    `,
    styleUrl: './todo-container.component.css'
})
export class TodoContainer {

    todoList: Todo[] = [];
    todoService: TodoService = inject(TodoService);

    constructor() {
        this.todoService.getAllTodoItems().then((res: Todo[]) => {
            this.todoList = res;
        })
    }
}