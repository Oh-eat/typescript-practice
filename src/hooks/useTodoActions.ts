import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { removeTodo, toggleTodo } from "../modules/todos";

function useTodoActions(id: number) {
  const dispatch = useDispatch();

  return {
    toggleTodo: useCallback(() => {
      dispatch(toggleTodo(id));
    }, [id, dispatch]),
    removeTodo: useCallback(() => {
      dispatch(removeTodo(id));
    }, [id, dispatch]),
  };
}

export default useTodoActions;
