import React from "react";

interface IGreetingsProps {
  name: string;
  mark: string;
  optional?: string;
  onClick?: (name: string) => void;
}

function Greetings({ name, mark, optional, onClick }: IGreetingsProps) {
  return (
    <div>
      <p>
        Hello, {name}
        {mark}
      </p>
      {optional && <p>{optional}</p>}
      <button onClick={onClick && (() => onClick(name))}>CLICK ME</button>
    </div>
  );
}

Greetings.defaultProps = {
  name: "Wang",
  mark: "!",
};

export default Greetings;
