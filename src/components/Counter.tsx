import React, { useState, useCallback } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  const onIncrease = useCallback(() => {
    setCount((state) => state + 1);
  }, []);
  const onDecrease = useCallback(() => {
    setCount((state) => state - 1);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+ 1</button>
        <button onClick={onDecrease}>- 1</button>
      </div>
    </div>
  );
}

export default Counter;
