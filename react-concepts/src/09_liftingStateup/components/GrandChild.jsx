import React from "react";

function GrandChild({ setCount }) {
  return (
    <div>
      <h1 className="text-xl">👉 GrandChild Component</h1>
      <p>
        Note :- GrandChild Component direct state ko touch nahi kar raha ❌ |
        Sirf function call kar raha hai ✔️
      </p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
}

export default GrandChild;
