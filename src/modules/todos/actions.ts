import { createAction } from "typesafe-actions";

export const INSERT_TODO = "todos/INSERT_TODO";
export const TOGGLE_TODO = "todos/TOGGLE_TODO";
export const REMOVE_TODO = "todos/REMOVE_TODO";

export const insertTodo = createAction(INSERT_TODO, (text: string) => text)();
export const toggleTodo = createAction(TOGGLE_TODO, (id: number) => id)();
export const removeTodo = createAction(REMOVE_TODO, (id: number) => id)();
