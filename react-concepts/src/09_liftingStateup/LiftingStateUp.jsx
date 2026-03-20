import React, { useEffect, useState } from "react";
import Child from "./components/Child";
import GrandChild from "./components/GrandChild";

/*
1️⃣ Lifiting State Up :- Lifting State Up state ko parent me move karna taaki multiple child components usse share aur update kar saken.

💠 Child ko state isliye nahi di jati update ke liye kyunki React me “Single Source of Truth” hota hai.
- Data (state) sirf ek hi jagah store hota hai (parent) mai.
- Baaki sab (child) components usi ek jagah se data lete hain.

🔹 Simple samajh :- 
- count :- data hai ( Jisko data dikhana hai → count do )
- setCount :- data change karne ka function hai ( Jisko data change karna hai → setCount do )

2️⃣ Problem :- State sirf ek jagah (parent) me hoti hai. Agar child ko direct state de di update ke liye, to :-

1. Multiple jagah se state change hogi
2. Data inconsistent ho sakta hai
3. Debugging mushkil ho jayegi
*/

function LiftingStateUp() {
  // 👉 State parent me hai Yehi hai (Single Source of Truth) baki child component yhi se data lete hain.
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`The Count is: ${count}`);
  }, [count]);

  return (
    <div>
      <h1 className="text-2xl">
        👉 Lifting-Stateup Hook in React :- State ko parent component me rakhna
        taaki multiple child components usi "state ko share" or "update kar
        saken".
      </h1>
      <div>
        <h1>Parent Count: {count}</h1>
        <Child count={count} />
        <GrandChild setCount={setCount} />
      </div>
    </div>
  );
}

export default LiftingStateUp;
