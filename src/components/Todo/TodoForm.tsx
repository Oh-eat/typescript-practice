import React, { useState, useCallback } from "react";
import { useTodosDispatch } from "../../contexts/TodoContext";

function TodoForm() {
  const dispatch = useTodosDispatch();
  const [value, setValue] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(() => value);
  }, []);
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch({ type: "CREATE", text: value });
      setValue("");
    },
    [value, dispatch]
  );

  return (
    <form onSubmit={onSubmit}>
      <input value={value} placeholder="TODO" onChange={onChange} />
      <input type="submit" value="추가" />
    </form>
  );
}

export default TodoForm;
