import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TodoService } from "../../services/todo.service";
import { throws } from "assert";

@Component({
    selector: 'add-todo',
    standalone: true,
    imports: [
        CommonModule,    
        FormsModule,
        ReactiveFormsModule
    ],
    template: `
    <section>
        <form [formGroup]="todoForm" (ngSubmit)="onSubmit()">
            <label for="td_desc">Hello! Please add a todo item!</label>
            <input type="text" id="td_desc" formControlName="td_desc">
            <button type="submit" >Submit</button>
        </form>
    </section>    
    `,
    styleUrl: './add-todo.component.css'
})
export class AddTodoContainer {
    
    todoService: TodoService = inject(TodoService);
    formBuilder: FormBuilder = inject(FormBuilder);

    todoForm = this.formBuilder.group({
        td_desc: ''
    });

    onSubmit() {
        const desc = this.todoForm.value["td_desc"]
        this.todoForm.reset();
        console.log(desc);

        if(desc) {
            this.todoService.addTodoItem(desc);
        }
    }
    
}