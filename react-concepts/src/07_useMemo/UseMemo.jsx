import React, { useMemo, useState } from "react";

// 🔥 Heavy Function
const slowFunction = (num) => {
  console.log("Render slowFunction RUNNING");

  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return num + 2;
};

function WithoutMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // ❌ Always runs
  // const result = slowFunction(count);

  // ✅ Only runs when count changes
  const result = useMemo(() => {
    return slowFunction(count);
  }, [count]);

  function handleInput(e) {
    console.time("Input Render");

    setText(e.target.value);

    console.timeEnd("Input Render");
  }

  return (
    <div className="p-5 border m-5">
      <h1># useMemo Hook</h1>
      <h3>Result: {result}</h3>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <div>
        <input placeholder="Type here..." value={text} onChange={handleInput} />
      </div>
    </div>
  );
}

export default WithoutMemo;
