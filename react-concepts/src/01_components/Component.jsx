import React from "react";

/*
✅ Definition ( Component ) :- In react a component is a reusable building block of the UI. It is a Javascript Function or Class that optionally accepts input called props and returns a react element which decribe what should appears on the screen. Component can represent things like Header, Footer, Button or entire pages.
*/

//🔹 Case 1: (props) use karna
// function Component(props) {
//   return (
//     <div className='text-2xl'>
//       <h1 className='text-3xl'>👉 Components in React</h1>
//         <p>{props.title}</p>
//         <p>{props.description}</p>
//     </div>
//   )
// }

//🔹 Case 2: ({ title, description }) (Destructuring)
function Component({ title, description }) {
  return (
    <div className="text-2xl">
      <h1 className="text-3xl">👉 Components in React</h1>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default Component;
