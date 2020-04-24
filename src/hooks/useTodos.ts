import { useSelector } from "react-redux";
import { TRootState } from "../modules";

function useTodos() {
  const todos = useSelector(({ todos }: TRootState) => todos);

  return todos;
}

export default useTodos;
