import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, map, exhaustMap, catchError, from, of } from 'rxjs';
import { TodoService } from '../services/todo.service';


@Injectable()
export class TodoEffects {
    loadTodo$ = createEffect(() => this.actions$.pipe(
        ofType('[Todo Component] Load'),
        exhaustMap(() => from(this.todoService.getAllTodoItems())
        .pipe(map(todos => ({type: '[Todo Api] Todo Items Loaded Success', payload: todos})),
        catchError(() => of({ type: '[Todo Api] Todo Items Loaded Error'}))
    ))
));

    constructor(
        private actions$: Actions,
        private todoService: TodoService
    ) {}
}