import React from "react";
import Greetings from "./components/Greetings";
import Counter from "./components/Counter";
import MyForm, { IForm } from "./components/MyForm";
import CounterWithReducer from "./components/CounterWithReducer";

function App() {
  return (
    <div>
      <Greetings onClick={(name) => alert(name)} />
      <Counter />
      <CounterWithReducer />
      <MyForm
        onSubmit={(form: IForm) => alert(`${form.name}: ${form.description}`)}
      />
    </div>
  );
}

export default App;
