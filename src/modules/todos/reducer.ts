import { createReducer } from "typesafe-actions";
import { TTodosState, TTodosAction } from "./types";
import { INSERT_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actions";

const initialState: TTodosState = [
  { id: 1, text: "타입스크립트 배우기", done: true },
  { id: 2, text: "타입스크립트와 리덕스 함께 사용해보기", done: true },
  { id: 3, text: "투두리스트 만들기", done: false },
];

const todos = createReducer<TTodosState, TTodosAction>(initialState, {
  [INSERT_TODO]: (state, { payload: text }) => {
    const nextId =
      state.length > 0 ? Math.max(...state.map((todo) => todo.id)) + 1 : 0;
    return state.concat({
      id: nextId,
      text,
      done: false,
    });
  },
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ),
  [REMOVE_TODO]: (state, { payload: id }) =>
    state.filter((todo) => todo.id !== id),
});

export default todos;
