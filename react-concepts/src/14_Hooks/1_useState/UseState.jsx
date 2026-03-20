import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  // 3️⃣. Functional state updates are good
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1 className="text-3xl">👉 useState Hook in React</h1>
      <div className="flex flex-col">
        <h2>Counter Example using useState</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default UseState;
