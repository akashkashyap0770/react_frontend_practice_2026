import { useState } from "react";
import Child from "./componments/Child";

/*
✅ Definition ( propDrilling ) :- propDrilling in react refers to the process of passing data props from a parent component down to child components, through multiple layers of internmediate components, even if those intermediate components don't need the data themseleves, but the prop is still passed down to delivered it to child component. It is a drawback of propDrilling which can be avoided using ContextAPI or useContext Hook.  
 */

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
