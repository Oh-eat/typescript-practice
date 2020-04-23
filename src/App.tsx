import React from "react";
import Greetings from "./components/Greetings";

function App() {
  return (
    <div>
      <Greetings onClick={(name) => alert(name)} />
    </div>
  );
}

export default App;
