import React from "react";

/*
✅ Definition ( listRendering  ) :- 

list :- list in react is usually an array that could contain strings, numbers, objects or even other component.
listRendering :- listRendering refers to the process of displaying each item in the list array in the UI. In react this is typically done using javascript map function. Map allows to to iterate over an array creating a react component usually JSX for each item.
*/

function ListRendering() {
  const arr = ["Akash", "Tinku", "Krishna", "Monu"];

  return (
    <div>
      <h1 className="text-3xl">👉 List-Rendering in React</h1>
      <div
        className="flex justify-center gap-x-3 text-black
            [&>p:nth-child(odd)]:bg-purple-300
            [&>p:nth-child(even)]:bg-pink-300
            "
      >
        {arr.map((elem, index) => (
          <p key={index} className="mt-5 p-2">
            {elem}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ListRendering;
