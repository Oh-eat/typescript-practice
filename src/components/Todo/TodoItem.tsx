import React from "react";
import { ITodo } from "../../contexts/TodoContext";

interface ITodoItemProps {
  todo: ITodo;
  onToggle: () => void;
  onRemove: () => void;
}

function TodoItem({ todo, onToggle, onRemove }: ITodoItemProps) {
  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text" onClick={onToggle}>
        {todo.text}
      </span>
      <span className="remove" onClick={onRemove}>
        ×
      </span>
    </li>
  );
}

export default TodoItem;
