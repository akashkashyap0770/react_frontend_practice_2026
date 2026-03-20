import { useState } from "react";
import Child from "./componments/Child";

function PropDrilling() {
  const [state, setState] = useState("Akash");

  const value =
    "PropDrilling means passing data from one component to another component passing data from Parent to Child.";

  function updateState() {
    setState("Shriyansh");
  }

  return (
    <div>
      <h1 className="text-3xl">👉 Prop-Drilling in React</h1>
      <div className="flex flex-col gap-y-5">
        <Child value={value} state={state} updateState={updateState} />
      </div>
    </div>
  );
}

export default PropDrilling;
