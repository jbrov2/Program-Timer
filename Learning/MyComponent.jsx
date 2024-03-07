import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Jay-Killa");
  };
  const incrementAge = () => {
    setAge(age + 2);
  };

  const employementChecker = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Go up in Age</button>

      <p>Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={employementChecker}>Click if you are employed</button>
    </div>
  );
}

export default MyComponent;
