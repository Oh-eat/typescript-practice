import React, { createContext, Dispatch, useReducer, useContext } from "react";

export interface ITodo {
  id: number;
  text: string;
  done: boolean;
}
type TTodoState = ITodo[];
const TodosStateContext = createContext<TTodoState | undefined>(undefined);

type TAction =
  | { type: "CREATE"; text: string }
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number };
type TodoDispatch = Dispatch<TAction>;
const TodosDispatchContext = createContext<TodoDispatch | undefined>(undefined);

function reducer(state: TTodoState, action: TAction): TTodoState {
  switch (action.type) {
    case "CREATE":
      const { text } = action;
      const nextId =
        state.length > 0 ? Math.max(...state.map((todo) => todo.id)) + 1 : 0;
      return state.concat({ id: nextId, text, done: false });
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

export function useTodosState() {
  const state = useContext(TodosStateContext);
  if (!state) throw new Error("TodosProvider not found");
  return state;
}

export function useTodosDispatch() {
  const dispatch = useContext(TodosDispatchContext);
  if (!dispatch) throw new Error("TodosProvider not found");
  return dispatch;
}

export default function TodosContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, dispatch] = useReducer(reducer, [
    {
      id: 1,
      text: "Context API 배우기",
      done: true,
    },
    {
      id: 2,
      text: "TypeScript 배우기",
      done: true,
    },
    {
      id: 3,
      text: "TypeScript 와 Context API 함께 사용하기",
      done: false,
    },
  ]);

  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={todos}>
        {children}
      </TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  );
}
