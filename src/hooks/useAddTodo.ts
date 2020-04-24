import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { insertTodo } from "../modules/todos";

function useAddTodo() {
  const dispatch = useDispatch();

  return useCallback(
    (text: string) => {
      dispatch(insertTodo(text));
    },
    [dispatch]
  );
}

export default useAddTodo;
