import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { AddTodoContainer } from "../add-todo/add-todo.component";
import { Todo } from "../../models/todo";
import { TodoService } from "../../services/todo.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

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
        *ngFor="let todoItem of todos$ | async"
        
        >{{todoItem.td_desc}}</p>
    </section>
    `,
    styleUrl: './todo-container.component.css'
})
export class TodoContainer {
    
    todos$: Observable<Todo[]> = this.store.select(state => state.todo);

    constructor(private store: Store<{todo: Todo[]}>) {
    }

    ngOnInit() {
        this.store.dispatch({type: '[Todo Component] Load'});
    }
}