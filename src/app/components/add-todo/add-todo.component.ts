import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'add-todo',
    standalone: true,
    imports: [
        CommonModule,    
    ],
    template: `
    <section>
        <p>Hello!</p>
    </section>    
    `,
    styleUrl: './add-todo.component.css'
})
export class AddTodoContainer {

}