import React, { useEffect, useState } from "react";

function State() {
  const [count, setCount] = useState(0);

  // 💠 Example 1 :- Its working but not efficient
  //   function updateAdd() {
  //     setCount(count + 1);
  //     console.log(count);
  //   }

  // 💠 Example 2 :- Its perfect :-
  function updateAdd() {
    if (count < 20) setCount(count + 1);
    // if(count < 20) setCount(prevCount => prevCount + 1);

    // 💠 Functional State Update (Functional Update Form) :- It helps avoid stale state issues.
    // setCount(prev => (prev < 20 ? prev + 1 : prev));
  }

  // 💠 Example 2 :- Its perfect :-
  function updateSub() {
    if (count > 0) setCount(count - 1);
    // if(count < 0) setCount(prevCount => prevCount - 1);

    // 💠 Functional State Update (Functional Update Form) :- It helps avoid stale state issues.
    // setCount(prev => (prev > 0 ? prev - 1 : prev));
  }

  // ✅ Correct way to see updated state
  useEffect(() => {
    console.log("Updated Count:", count);
  }, [count]);

  return (
    <div>
      <h1 className="text-3xl">👉 Components in React</h1>
      <div className="flex flex-col gap-y-5">
        <p className="text-2xl">Count : {count}</p>
        <button className="bg-blue-500 p-2 text-md" onClick={updateAdd}>
          Add Count
        </button>
        <button className="bg-blue-500 p-2 text-md" onClick={updateSub}>
          Sub Count
        </button>
      </div>
    </div>
  );
}

export default State;
