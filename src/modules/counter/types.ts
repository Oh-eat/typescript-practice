import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type TCounterState = {
  count: number;
};
export type TCounterAction = ActionType<typeof actions>;
