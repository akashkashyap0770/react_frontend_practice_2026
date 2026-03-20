import React, { useState } from "react";

function UseStateWithArray() {
  // 👉 Jab multiple similar items store karne ho, tab array use hota hai.
  const [items, setItems] = useState([]);

  // 1️⃣ Example :-
  //   function addItem() {
  //     setItems([...items, "New Item"]);
  //   }

  // 2️⃣ Example :-
  //   function addItem() {
  //     setItems([
  //       ...items,
  //       {
  //         id: items.length,
  //         value: Math.floor(Math.random() * 100) + 1,
  //       },
  //     ]);
  //   }

  // 3️⃣ Example :- Use functional state updates to avoid stale state issues in React.
  function addItem() {
    const newItem = {
      id: items.length,
      value: Math.floor(Math.random() * 100) + 1,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  }

  // Imp Note:- Stale state issue tab hota hai jab React state update karte time hum purani (outdated) state value use kar lete hain, jiski wajah se wrong result milta hai.

  return (
    <div>
      <h1 className="text-3xl">👉 useState with Array in React</h1>
      <div>
        <h2>Items List</h2>
        <button onClick={addItem}>Add Item</button>

        {/* {items.map((item, index) => (
          <p key={index}>
            {item} {index + 1}
          </p>
        ))} */}

        {items.map((item) => (
          <p key={item.id}>Random Item Value {item.value}</p>
        ))}
      </div>
    </div>
  );
}

export default UseStateWithArray;
