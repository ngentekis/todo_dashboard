import { createReducer, on } from "@ngrx/store";
import { fetchTodo } from "./todo.action";


export const initialState: Todo[] = []

export interface Todo {
    id: number;
    td_desc: string;
    td_status: boolean;
}
