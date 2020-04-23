import React, { useCallback } from "react";
import { useTodosState, useTodosDispatch } from "../../contexts/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useTodosState();
  const dispatch = useTodosDispatch();

  const onToggle = useCallback(
    (id: number) => {
      dispatch({ type: "TOGGLE", id });
    },
    [dispatch]
  );
  const onRemove = useCallback(
    (id: number) => {
      dispatch({ type: "REMOVE", id });
    },
    [dispatch]
  );

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onRemove={() => onRemove(todo.id)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
