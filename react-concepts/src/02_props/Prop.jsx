import React from "react";

/*
✅ Definition ( Props ) :- Props is a special keyword in react that stand for properties and it is used for passing data from one component to another component data with props are passed in a unidirectional flow from parent to child.
*/

function Prop(props) {
  return (
    <div className="flex flex-col justify-center gap-5">
      <h1 className="text-4xl">👉 Props in React</h1>
      <div>
        <p>🙎Name: {props.name}</p>
        <p>🧑‍💻Role: {props.role}</p>
        <button
          className="bg-blue-600 p-2 rounded-md text-xl"
          onClick={props.fun}
        >
          Click and alert the result.
        </button>
      </div>
    </div>
  );
}

export default Prop;
