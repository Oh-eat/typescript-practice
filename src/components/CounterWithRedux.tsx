import React from "react";
import useCounter from "../hooks/useCounter";

interface ICounterWithReduxProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
}

function CounterWithRedux() {
  // {
  //   count,
  //   onIncrease,
  //   onDecrease,
  //   onIncreaseBy,
  // }: ICounterWithReduxProps
  const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+ 1</button>
      <button onClick={onDecrease}>- 1</button>
      <button onClick={() => onIncreaseBy(9)}>+ 9</button>
    </div>
  );
}

export default CounterWithRedux;
