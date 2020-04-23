import React, { useReducer, useCallback, useRef } from "react";

type IState = number;
type IAction = { type: "INCREASE" } | { type: "DECREASE" };

function reducer(state: IState, action: IAction): number {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
}

function CounterWithReducer() {
  const [count, dispatch] = useReducer(reducer, 0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onIncrease = useCallback(() => {
    dispatch({ type: "INCREASE" });
  }, []);
  const onDecrease = useCallback(() => {
    dispatch({ type: "DECREASE" });
  }, []);
  const onButtonRefClick = useCallback(() => {
    buttonRef.current!.style.background =
      "#" + Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+ 1</button>
        <button onClick={onDecrease}>- 1</button>
        <button ref={buttonRef} onClick={onButtonRefClick}>
          Ref
        </button>
      </div>
    </div>
  );
}

export default CounterWithReducer;
