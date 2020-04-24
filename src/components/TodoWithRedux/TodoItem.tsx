import React from "react";
import { TTodo } from "../../modules/todos/types";
import useTodoActions from "../../hooks/useTodoActions";

type TTodoItemProps = {
  todo: TTodo;
};

function TodoItem({ todo }: TTodoItemProps) {
  const { toggleTodo, removeTodo } = useTodoActions(todo.id);

  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text" onClick={toggleTodo}>
        {todo.text}
      </span>
      <span className="remove" onClick={removeTodo}>
        ×
      </span>
    </li>
  );
}

export default TodoItem;
