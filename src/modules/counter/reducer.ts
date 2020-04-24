import { createReducer } from "typesafe-actions";
import { TCounterState, TCounterAction } from "./types";
import { INCREASE, DECREASE, INCREASE_BY } from "./actions";

const initialState: TCounterState = {
  count: 0,
};

const counter = createReducer<TCounterState, TCounterAction>(initialState, {
  [INCREASE]: (state) => ({ count: state.count + 1 }),
  [DECREASE]: (state) => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, { payload }) => ({ count: state.count + payload }),
});

export default counter;
