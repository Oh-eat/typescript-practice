import React, { useState, useCallback } from "react";
import useAddTodo from "../../hooks/useAddTodo";

function TodoInsert() {
  const addTodo = useAddTodo();
  const [value, setValue] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      addTodo(value);
      setValue("");
    },
    [addTodo, value]
  );

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="TODO" value={value} onChange={onChange} />
      <input type="submit" value="추가" />
    </form>
  );
}

export default TodoInsert;
