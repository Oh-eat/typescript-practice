import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type TTodo = {
  id: number;
  text: string;
  done: boolean;
};
export type TTodosState = TTodo[];
export type TTodosAction = ActionType<typeof actions>;
