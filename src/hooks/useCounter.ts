import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TRootState } from "../modules";
import { increase, decrease, increaseBy } from "../modules/counter";

function useCounter() {
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

  return { count, onIncrease, onDecrease, onIncreaseBy };
}

export default useCounter;
