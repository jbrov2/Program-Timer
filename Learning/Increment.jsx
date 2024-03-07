import React, { useState } from "react";

function Increment() {
  const [age, setAge] = useState(0);

  function goUp() {
    setAge((prevAge) => prevAge + 1); // updater function
    setAge((prevAge) => prevAge + 1);
    setAge((prevAge) => prevAge + 1);
  }

  function goDown() {
    setAge(age - 1); //regular
  }

  function reset() {
    setAge(0);
  }

  return (
    <div>
      <p>Age: {age}</p>
      <button onClick={goUp}>Age Up</button>
      <button onClick={reset}> Reset Age</button>
      <button onClick={goDown}> Age Down</button>
    </div>
  );
}

export default Increment;
