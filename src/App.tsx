import React from "react";
// import Greetings from "./components/Greetings";
// import Counter from "./components/Counter";
// import MyForm, { IForm } from "./components/MyForm";
// import CounterWithReducer from "./components/CounterWithReducer";
// import TodoForm from "./components/Todo/TodoForm";
// import TodoList from "./components/Todo/TodoList";
// import TodosContextProvider from "./contexts/TodoContext";
// import CounterWithReduxContainer from "./containers/CounterWithReduxContainer";
import CounterWithRedux from "./components/CounterWithRedux";
import TodoInsert from "./components/TodoWithRedux/TodoInsert";
import TodoList from "./components/TodoWithRedux/TodoList";

function App() {
  return (
    <div>
      {/* <Greetings onClick={(name) => alert(name)} />
      <Counter />
      <CounterWithReducer />
      <MyForm
        onSubmit={(form: IForm) => alert(`${form.name}: ${form.description}`)}
      />
      <TodosContextProvider>
        <TodoForm />
        <TodoList />
      </TodosContextProvider> */}
      {/* <CounterWithReduxContainer /> */}
      <CounterWithRedux />
      <TodoInsert />
      <TodoList />
    </div>
  );
}

export default App;
