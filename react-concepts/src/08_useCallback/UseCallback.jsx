import React, { useCallback, useState } from "react";

/*
✅ Definition ( useCallback ) :- useCallback hook in react is used to memoized a function ensuring the same function is not recreated on every render. It only recreates the function if its dependencies change, which helps improve performance by preventing unnecessary re-renders in components that rely on stable function references.

💠 Interview :- Parent re-render creates a new function reference, and when passed as props, it causes child to re-render due to prop change.
*/

/*
Definition :- React me jab parent component re-render hota hai, to uske andar defined functions dobara create hote hain. Jab ye function child component ko prop ke through pass kiya jata hai, to har baar naya reference hone ki wajah se child component bhi re-render ho jata hai.
*/

// ✅ Button Child component
const Button = React.memo(({ Increment, children }) => {
  console.log(`🔁 ${children} Rendered`);
  return (
    <button onClick={Increment} className="bg-amber-400 p-2 inline-block">
      {children}
    </button>
  );
});

function UseCallback() {
  const [state, setState] = useState(0);
  const [count, setCount] = useState(0);

  function handleStateUpdate() {
    console.log("State Render");
    setState((prev) => prev + 1);
  }

  /*
  ❌ WITHOUT useCallback
  👉 Har render pe naya function create hota hai
  👉 Function ka reference change ho jata hai
  👉 React.memo shallow compare karta hai (reference check)
  👉 New reference = prop change
  👉 Isliye child component baar-baar re-render hota hai ❌
  */
  // const Increment = () => {
  //   console.log("Count render");
  //   setCount((c) => c + 1);
  // };

  /*
  ✅ WITH useCallback
  👉 Function ko memoize karta hai (same reference maintain)
  👉 Jab tak dependency change nahi hoti, function same rehta hai
  👉 React.memo ko same prop milta hai
  👉 Isliye child component re-render nahi hota ✅
  */
  const Increment = useCallback(() => {
    console.log("✅ Increment function called");
    setCount((c) => c + 1);
  }, []);

  // ⚠️ Note:
  // Agar [count] dependency me doge to function har render pe naya banega
  // → React.memo ka benefit khatam ho jayega

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-3xl">👉 useCallback Hook in React</h1>

      {/* Parent State */}
      <h2>State: {state}</h2>
      <button onClick={handleStateUpdate} className="bg-amber-400 p-2">
        Update State
      </button>

      {/* Count State */}
      <h2>Count: {count}</h2>

      {/* Child Component */}
      <Button Increment={Increment}>Child Component & Increment Count:</Button>
    </div>
  );
}

export default UseCallback;
