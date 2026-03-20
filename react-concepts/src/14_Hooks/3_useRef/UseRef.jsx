import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0); // initial value

  // Safe to read
  const prevCount = prevCountRef.current;

  useEffect(() => {
    prevCountRef.current = count; // store previous count after render
  }, [count]);

  return (
    <div>
      <h1 className="text-3xl">👉 useRef Hook in React</h1>
      <div>
        <h2>Count: {count}</h2>
        <h3>Previous Count: {prevCount}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
}

export default UseRef;
