import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import CounterWithRedux from "../components/CounterWithRedux";
import { TRootState } from "../modules";
import { increase, decrease, increaseBy } from "../modules/counter";

function CounterWithReduxContainer() {
  const dispatch = useDispatch();
  const count = useSelector((state: TRootState) => state.counter.count);

  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);
  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);
  const onIncreaseBy = useCallback(
    (diff: number) => {
      dispatch(increaseBy(diff));
    },
    [dispatch]
  );

  return (
    <CounterWithRedux
    //   count={count}
    //   onIncrease={onIncrease}
    //   onDecrease={onDecrease}
    //   onIncreaseBy={onIncreaseBy}
    />
  );
}

export default CounterWithReduxContainer;
