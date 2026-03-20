import React, { useState } from "react";

const initialValue = 0;

function useCustomHook(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => (prev < 20 ? prev + 1 : prev));
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

export default useCustomHook;
