import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import { Data } from "./context/Context";

/*
✅ Definition ( contextAPI ) :- contextAPI in react is a way to share data like state, function or values across component without having to pass props through every level of the component tree, avoiding propDrilling. It allows you to create a global state and that can be accessed by any component within a certain part of the app.
*/

function ContextAPI() {
  const [user, setUser] = useState({
    name: "Akash",
    isLoggedIn: false, // ✅ boolean
  });

  /*  Note:- Double Curly braces uses:-
        - Outer {}	JSX ke andar JS likhne ke liye
        - Inner {}	Object banane ke liye
    */
  return (
    <>
      <div>
        {/* Double curly braces are used because JSX requires {} to evaluate JavaScript, and the inner {} represent an object literal. */}
        <Data.Provider value={{ user, setUser }}>
          <h1 className="text-3xl">👉 ContextAPI in React</h1>
          <div>
            <Dashboard />
          </div>
        </Data.Provider>
      </div>
    </>
  );
}

export default ContextAPI;
