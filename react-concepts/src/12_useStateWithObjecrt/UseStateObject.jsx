import React, { useState } from "react";

function UseStateObject() {
  // 👉 Jab related data ek hi cheez ka ho, tab object use karte hain.
  const [user, setUser] = useState({
    name: "Akash",
    age: 25,
    city: "Lucknow",
  });

  // 1️⃣ Example :- ❌ This is Not the right way because This method only updates the `name` property and removes the rest of the object properties like `age` and `city`.

  //   function updateName() {
  //     setUser({ name: "Shriyansh" }); // setUser replaces the whole object
  //   }

  // 2️⃣ Example :- function to update the user's name using the spread operator, This keeps other properties intact while updating only the name.

  function updateName() {
    setUser({
      ...user,
      name: "Shriyansh", // so we must use spread operator to keep old values
    });
  }

  // 3️⃣ Example :- To avoid stale state issues in React, always use the functional form, of state update when the new state depends on the previous state.

  function updateCity() {
    setUser((prevState) => ({ ...prevState, city: "New Delhi" }));
  }

  return (
    <div>
      <h1 className="text-3xl">👉 useState with Object in React</h1>
      <div className="flex flex-col gap-y-5">
        <h2>User Information:-</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Cityt: {user.city}</p>

        <button onClick={updateName}>UpdateName</button>
        <button onClick={updateCity}>UpdateCity</button>
      </div>
    </div>
  );
}

export default UseStateObject;
