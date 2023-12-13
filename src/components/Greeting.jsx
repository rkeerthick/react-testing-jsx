import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [isChanged, setIsChanged] = useState(false);

  const handleChange = () => {
    setIsChanged((prev) => !prev);
  };
  return (
    <>
      <h1>Hello</h1>
      {!isChanged && <Output>haven't clicked</Output>}
      {isChanged && <Output>have clicked</Output>}
      <button onClick={handleChange}>Click me</button>
    </>
  );
};

export default Greeting;
